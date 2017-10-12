import router from '../router/index';

//测试一下默认路由
async function test(ctx) {
  console.log("-------user")
  ctx.body = "hello worldUser";
}


export default {
  'GET /': test
}
