import Koa from 'koa';
import sequelize from './config/sequelize';
import checkModel from './middleware/checkModel';

const koa = new Koa();

koa.use(checkModel);

koa.use(async (ctx) => {
  ctx.body = "Hello world";
});
sequelize
  .authenticate()
  .then(() => {
    console.log('数据库链接成功');
  })
  .catch(err => {
    console.error('数据库链接失败');
  });



koa.listen(3000);
