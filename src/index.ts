import { Dashboard } from '@discord-dashboard/core';
import Theme from '@discord-dashboard/typings/dist/Dashboard/Theme';
import FastifyVite from '@fastify/vite';
import { resolve, join } from 'node:path';

export default class BaseTheme implements Theme {
  name = 'Base';

  async Initialize(dashboard: Dashboard) {
    await dashboard.fastify.register(FastifyVite, {
      root: resolve(join(__dirname, '../../')),
      renderer: '@fastify/react',
    });

    await dashboard.fastify.vite.ready();
  }
}
