const Koa = require('koa');
const router = require('koa-router')();
const cors = require('@koa/cors'); //跨域
const bodyParser = require('koa-bodyparser'); //解析 request的body
const corsoption = require('./config/corsconfig'); //跨域的一些配置
const {
    loadModel
} = require('./db/init');
const dbconfig = require('./db/config');
// const apis = require('./api/user'); //这里得重构
const apis = require('./api/index');
const app = new Koa();

loadModel(dbconfig);
app.use(cors(corsoption));
app.use(bodyParser());
app.use(...apis); //把路由挂上来
// app.use(router.routes())
app.use(router.allowedMethods());

app.listen('8081');

console.log('启动成功 http://127.0.0.1:8081/');