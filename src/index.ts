import { ThemeData, defaultThemeData } from './utils/ThemeData';
import { Dashboard } from '@discord-dashboard/core';
import Theme from '@discord-dashboard/typings/dist/Dashboard/Theme';
import { FastifyRequest } from 'fastify';
import Next from 'next';
import { join } from 'node:path';
import { Component } from 'react';

export default class BaseTheme implements Theme {
  name = 'Base Theme';
  id = 'base';

  async Initialize(dashboard: Dashboard) {
    const fastify = dashboard.fastify;

    const app = Next({
      dev: true,
      port: dashboard.config.port,
      dir: join(__dirname, '../'),
    });
    const handle = app.getRequestHandler();
    await app.prepare();

    fastify.get('/api/theme', async (req, reply) => {
      const data =
        ((await dashboard.database.instance.get(
          `themeSettings.${this.id}`,
        )) as ThemeData) || null;
      return reply.code(200).send(data || defaultThemeData);
    });

    let components: any[] = [];

    fastify.get('/components', async (request, reply) => {
      return { components };
    });

    fastify.post(
      '/components',
      async (
        request: FastifyRequest<{
          Body: {
            components: any[];
          };
        }>,
        reply,
      ) => {
        components = request.body.components;
        return { success: true };
      },
    );

    fastify.all('/*', (req, reply) => {
      return handle(req.raw, reply.raw);
    });

    fastify.setErrorHandler(async (error, req, reply) => {
      return await app.render(req.raw, reply.raw, '/error');
    });

    fastify.setNotFoundHandler(async (request, reply) => {
      return app.render404(request.raw, reply.raw).then(() => {
        reply.sent = true;
      });
    });
  }
}
