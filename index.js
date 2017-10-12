import Koa from 'koa';
import sequelize from './config/sequelize';
import checkModel from './middleware/checkModel';
import checkController from "./middleware/checkController";
import router from './router'

const koa = new Koa();

koa.use(checkModel);
koa.use(checkController);

sequelize
  .authenticate()
  .then(() => {
    console.log('数据库链接成功');
  })
  .catch(err => {
    console.error('数据库链接失败');
  });

koa.use(router.routes());
koa.listen(3000);
