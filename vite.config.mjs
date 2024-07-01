import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path'

import viteReact from '@vitejs/plugin-react'
import viteFastifyReact from '@fastify/react/plugin'

import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import * as path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  root: resolve(__dirname, "client"),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true
  },
  plugins: [
    viteReact(),
    viteFastifyReact(),
  ],
  ssr: {
    external: [
      'use-sync-external-store'
    ]
  },
}
