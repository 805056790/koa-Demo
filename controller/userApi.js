import router from '../router/index';
import User from "../model/User";

//测试一下默认路由
async function test(ctx) {
  await ctx.render('index', {
    title: "你好世界",
  })
}

//登录函数
async function Login(ctx) {
  console.log("----1-2-3-4-")
  const username = ctx.request.body.username;
  const password = ctx.request.body.password;
  console.log(username, password, "-----------");
  try {
    let result = await User.findOrCreate({
      where: {
        username: username,
        password: password
      }
    });
    ctx.body = {
      data: {username: username, password: password},
      status: 200
    }
  }
  catch (err) {
    ctx.body = {
      error: err.message,
      status: 500
    }
  }

}

export default {
  'GET /': test,
  'POST /login': Login
}
