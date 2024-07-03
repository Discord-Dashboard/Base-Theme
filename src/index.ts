import { ThemeData, defaultThemeData } from './utils/ThemeData';
import { Dashboard } from '@discord-dashboard/core';
import Theme from '@discord-dashboard/typings/dist/Dashboard/Theme';
import Next from 'next';
import { join } from 'node:path';

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

    fastify.get('/theme', (req, reply) => {
      return app.render(req.raw, reply.raw, '/theme-management');
    });

    fastify.get('/dashboard', (req, reply) => {
      return app.render(req.raw, reply.raw, '/dashboard');
    });

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
