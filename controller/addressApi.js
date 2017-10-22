import router from '../router/index';

//测试一下默认路由
async function test(ctx) {
  let postdata = "";
  let postData = ctx.request.body;
  ctx.body = postData
}


export default {
  'POST /test': test
}
