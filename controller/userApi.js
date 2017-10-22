import router from '../router/index';

//测试一下默认路由
async function test(ctx) {
  await ctx.render('index', {
    title:"你好世界",
  })
}


export default {
  'GET /': test
}
