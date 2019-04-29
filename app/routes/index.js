const getUser = require('../users/getUser');
const Router = require('koa-router');
const router = new Router();

router.get('/', ctx => {
  ctx.body = 'Hello World!';
});

router.get('/user', async (ctx) => {
  const result = await getUser(ctx);
  ctx.body = result;
  console.log('*******result*********', result);
});

module.exports = router;
