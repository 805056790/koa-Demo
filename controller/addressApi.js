import router from '../router/index';

//测试一下默认路由
async function test(ctx) {
  console.log("----testaddress----")
  ctx.body = "hello worldAddress";
}


export default {
  'GET /test': test
}
