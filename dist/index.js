"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ThemeData = require("./utils/ThemeData");
var _express = _interopRequireDefault(require("@fastify/express"));
var _next = _interopRequireDefault(require("next"));
var _nodePath = require("node:path");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class BaseTheme {
  name = 'Base Theme';
  id = 'base';
  docs_url = 'https://example.com';
  async Initialize(dashboard) {
    const fastify = dashboard.fastify;
    const app = (0, _next.default)({
      dev: true,
      port: dashboard.config.port,
      dir: (0, _nodePath.join)(__dirname, '../')
    });
    const handle = app.getRequestHandler();
    await app.prepare();
    await fastify.register(_express.default);
    fastify.get('/api/theme', async (req, reply) => {
      const data = (await dashboard.database.instance.get(`themeSettings.${this.id}`)) || null;
      return reply.code(200).send(data || _ThemeData.defaultThemeData);
    });
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
exports.default = BaseTheme;