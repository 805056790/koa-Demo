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

let users = [];

io.on('connection', function (socket) {
  //监听登录状态
  socket.on("login", function ({username}) {
    console.log("-----据说可以打印出socketId", socket.id);
    console.log(username + "登录了");
    // 向客户端广播，这边的话就是有人登录了
    users.push({id: socket.id, username: username});

    io.to(socket.id).emit("users.init", users);

    //试试看能不能存储状态------->可以存储
    socket.username = username;

    socket.broadcast.emit('users.login', {id: socket.id, username});
  });

  //监听消息的发送
  socket.on("sendMessage", function (mess) {
    console.log({username: socket.username, mess: mess, id: socket.id});
    socket.broadcast.emit('new.mess', {username: socket.username, mess: mess.mess, id: socket.id});

  });

  socket.on("disconnect", function () {
    console.log("a user disconnect");
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