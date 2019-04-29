const CONSTANTS = require("./app/constants");
const Koa = require('koa');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const router = require('./app/routes');
const cors = require('koa-cors');

const app = new Koa();

app.use(cors());
app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(logger());

app.listen(CONSTANTS.PORT);

console.log(`Server is working on port http://localhost:${CONSTANTS.PORT}`);
