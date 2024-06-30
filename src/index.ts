import { Dashboard } from '@discord-dashboard/core';
import Theme from '@discord-dashboard/typings/dist/Dashboard/Theme';
import FastifyNextJS from '@fastify/nextjs';
import * as path from 'node:path';

export default class BaseTheme implements Theme {
  name = 'Base';

  async Initialize(dashboard: Dashboard) {
    /*await dashboard.fastify.register(FastifyNextJS, {
            logLevel: dashboard.Environment.log_level.toLowerCase() as any,
            dir: path.join(__dirname, "../")
        });

        dashboard.fastify.next('/fugg', async (app, request, reply) => {
            throw new Error("me");
        });

        dashboard.fastify.setErrorHandler(async (error, request, reply) => {
            console.log("error handler called");
            await reply.nextRenderError(error);
        });*/
  }
}
