import Next from "next"

import Theme from '@discord-dashboard/typings/dist/Dashboard/Theme';
import { Dashboard } from '@discord-dashboard/core';

import { join } from "node:path"

console.log("dir is", join(__dirname, "../"))

export default class BaseTheme implements Theme {
  name = "Base Theme"

  async Initialize(dashboard: Dashboard) {
    const fastify = dashboard.fastify;

    const app = Next({ dev: true, port: dashboard.config.port, dir: join(__dirname, "../") }); // fuck dev atm
    const handle = app.getRequestHandler();
    await app.prepare();

    fastify.get('/_next/*', (req, reply) => {
      return handle(req.raw, reply.raw).then(() => {
        reply.sent = true;
      });
    });

    fastify.get('/a', (req, reply) => {
      return app.render(req.raw, reply.raw, '/a', {}).then(() => {
        reply.sent = true;
      });
    });

    fastify.get('/b', (req, reply) => {
      return app.render(req.raw, reply.raw, '/b', {}).then(() => {
        reply.sent = true;
      });
    });

    fastify.all('/*', (req, reply) => {
      console.log('Capture * called');
      return handle(req.raw, reply.raw).then(() => {
        reply.sent = true;
      });
    });

    // fastify.get('/error', (req, reply) => {
    //   // return app.render(req.raw, reply.raw, '/error', req.query).then(() => {
    //   //   reply.sent = true;
    //   // });
    //   throw new Error('No');
    //   return app.render(req.raw, reply.raw, '/error', {}).then(() => {
    //     reply.sent = true;
    //   });
    // });

    fastify.setErrorHandler((error, req, reply) => {
      console.log(error.code, error.message)
      return app.render(req.raw, reply.raw, '/error', {}).then(() => {
        reply.sent = true;
      });
    })

    fastify.setNotFoundHandler(async (request, reply) => {
      console.log('404 hit');
      return app.render404(request.raw, reply.raw).then(() => {
        reply.sent = true;
      });
    });
  }
}