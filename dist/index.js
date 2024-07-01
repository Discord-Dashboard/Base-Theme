"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _next = _interopRequireDefault(require("next"));
var _nodePath = require("node:path");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
console.log("dir is", (0, _nodePath.join)(__dirname, "../"));
class BaseTheme {
  name = "Base Theme";
  async Initialize(dashboard) {
    const fastify = dashboard.fastify;
    const app = (0, _next.default)({
      dev: true,
      port: dashboard.config.port,
      dir: (0, _nodePath.join)(__dirname, "../")
    }); // fuck dev atm
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
      console.log(error.code, error.message);
      return app.render(req.raw, reply.raw, '/error', {}).then(() => {
        reply.sent = true;
      });
    });
    fastify.setNotFoundHandler(async (request, reply) => {
      console.log('404 hit');
      return app.render404(request.raw, reply.raw).then(() => {
        reply.sent = true;
      });
    });
  }
}
exports.default = BaseTheme;