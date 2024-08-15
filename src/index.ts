import type { Theme } from '@discord-dashboard/typings/dist/Core/Theme';
import { Config, Environment } from '@discord-dashboard/typings/dist/Config';
import type {
    GuildFormOptionGroup,
    UserFormOptionGroup,
} from '@discord-dashboard/typings/dist/FormOptions/FormGroup';
import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

import Next from 'next';
import path from 'node:path';
import * as url from 'node:url';

class BaseTheme implements Theme {
    public name: string = 'BaseTheme';

    public async inject(
        fastify: FastifyInstance,
        config: Config,
        options: {
            guild: GuildFormOptionGroup[];
            user: UserFormOptionGroup[];
        },
    ) {
        const next_app = Next({
            dev: config.environment === Environment.DEVELOPMENT,
            port: config.api.port,
            dir: path.join(__dirname, '../client'),
        });

        const next_handle = next_app.getRequestHandler();

        fastify.all('*', {
            onRequest: async (
                request: FastifyRequest,
                reply: FastifyReply,
                next: () => void,
            ) => {
                reply.hijack();
                try {
                    const parsedUrl = url.parse(request.url, true);
                    await next_handle(request.raw, reply.raw, parsedUrl);
                } catch (err) {
                    reply.statusCode = 500;
                    reply.raw.end('Internal server error');
                }
                next();
            },
            handler: () => {},
        });

        await next_app.prepare();
    }
}

export default BaseTheme;
