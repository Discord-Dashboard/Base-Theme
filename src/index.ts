import { Dashboard } from '@discord-dashboard/core';
import Theme from '@discord-dashboard/typings/dist/Dashboard/Theme';
import Next from 'next';
import { join } from 'node:path';

export default class BaseTheme implements Theme {
  name = 'Base Theme';

  async Initialize(dashboard: Dashboard) {
    const fastify = dashboard.fastify;

    const app = Next({
      dev: true,
      port: dashboard.config.port,
      dir: join(__dirname, '../'),
    });
    const handle = app.getRequestHandler();
    await app.prepare();

    fastify.get('/a', (req, reply) => {
      throw new Error('fuck me.');
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
