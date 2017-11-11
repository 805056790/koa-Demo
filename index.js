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


var roomno = 1;

io.on('connection', function (socket) {
  console.log(io);
  console.log('a user connect');
  socket.on("disconnect", function () {
    console.log("a user disconnect");
  });
  socket.on("login", function ({username}) {
    console.log(username + "登录了");
    // sending to all clients except sender
    socket.broadcast.emit('user.login', {username});
  });
  if (io.nsps['/'].adapter.rooms["room-" + roomno] && io.nsps['/'].adapter.rooms["room-" + roomno].length > 1)
    roomno++;
  socket.join("room-" + roomno);
  console.log("---下面要展示的就是所谓的fangjian");
  //Send this event to everyone in the room.
  io.sockets.in("room-" + roomno).emit('connectToRoom', "You are in room no. " + roomno);
  console.log(io.nsps['/'].adapter)
});

var nsp = io.of("/chat");
nsp.on('connection', function (socket) {
  console.log('someone connected');
  nsp.emit('hi', 'Hello everyone!');
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