import Koa from 'koa';

const koa = new Koa();

koa.use(async (ctx) => {
  ctx.body = "Hello world";
});

koa.listen(3000);
