"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _next = _interopRequireDefault(require("next"));
var _nodePath = require("node:path");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class BaseTheme {
  name = 'Base Theme';
  async Initialize(dashboard) {
    const fastify = dashboard.fastify;
    const app = (0, _next.default)({
      dev: true,
      port: dashboard.config.port,
      dir: (0, _nodePath.join)(__dirname, '../')
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
exports.default = BaseTheme;