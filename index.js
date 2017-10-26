import Koa from 'koa';
import sequelize from './config/sequelize';
import checkModel from './middleware/checkModel';
import checkController from "./middleware/checkController";
import router from './router'
import checkDatabase from "./middleware/checkDatabase";
import path from 'path';
import bodyParser from 'koa-bodyparser';
import koaStatic from 'koa-static';
import views from 'koa-views';

const koa = new Koa();
const server = require('http').Server(koa.callback());
var io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

checkDatabase();
checkModel();
checkController();

//解析post参数
koa.use(bodyParser());

//设置静态资源
const staticPath = './public';
koa.use(koaStatic(
  path.join(__dirname, staticPath)
));

// 加载模板引擎
koa.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}));

koa.use(router.routes());
server.listen(5050);