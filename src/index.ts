import { ThemeData, defaultThemeData } from './utils/ThemeData';
import { Dashboard } from '@discord-dashboard/core';
import Theme from '@discord-dashboard/typings/dist/Dashboard/Theme';
import FastifyExpress from '@fastify/express';
import express from 'express';
import { FastifyRequest } from 'fastify';
import Next from 'next';
import DiscordProvider from 'next-auth/providers/discord';
import { join } from 'node:path';

export default class BaseTheme implements Theme {
  name = 'Base Theme';
  id = 'base';

  docs_url = 'https://example.com';

  async Initialize(dashboard: Dashboard) {
    const fastify = dashboard.fastify;

    const app = Next({
      dev: true,
      port: dashboard.config.port,
      dir: join(__dirname, '../'),
    });
    const handle = app.getRequestHandler();
    await app.prepare();

    await fastify.register(FastifyExpress);

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

    fastify.all('*', (request, reply) => {
      return handle(request.raw, reply.raw);
    });

    fastify.setNotFoundHandler(async (request, reply) => {
      return app.render404(request.raw, reply.raw).then(() => {
        reply.sent = true;
      });
    });
  }
}
