import router from '../router/index';
import ChatUser from '../model/ChatUser';
import {api} from "../util/apiUtil";
import sequelize from '../config/sequelize';

const crypto = require("crypto");

async function login(ctx) {
  let username = ctx.request.body.username;
  let password = ctx.request.body.password;
  console.log({username, password});
  let sha1 = crypto.createHash('sha1');

  let result = await sequelize.query(`select * from chatusers  where username = "${username}" and password ="${sha1.update(password).digest('hex')}"`, {
    logging: true,
    plain: true,
    raw: true
  });
  // let result = await sequelize.query(`select * from chatusers`,{logging : true, plain : true,  raw : true});
  if (result) {
    ctx.body = api(200, {data: result.id}, "登录成功");
  } else {
    ctx.body = api(403, [], "用户名或者密码不正确");
  }
}


async function reg(ctx) {
  let username = ctx.request.body.username;
  let password = ctx.request.body.password;

  console.log(username, password);
  if (username === "" || password === "") {
    ctx.body = api(403, [], "用户名或者密码不能为空");
  } else {
    let sha1 = crypto.createHash('sha1');
    try {
      let user = await ChatUser.create({
        username,
        password: sha1.update(password).digest('hex')
      });
      ctx.body = api(200, {user: user.get({"plain": true})}, "注册成功");
    } catch (err) {
      ctx.body = api(500, [], err.message);
    }
  }
}


export default {
  "POST /login": login,
  "POST /reg": reg
}