const CONSTANTS = require("./app/constants");

const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'Hello World!';
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(logger());

app.listen(CONSTANTS.PORT);

console.log(`Server is working on port http://localhost:${CONSTANTS.PORT}`);
