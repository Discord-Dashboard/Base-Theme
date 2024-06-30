"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseTheme {
    name = "Base";
    async Initialize(dashboard) {
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
exports.default = BaseTheme;
