import sequelize from '../config/sequelize';

export default async function checkDatabase(ctx, next) {
  try {
    console.log("--------333-")
    await sequelize.authenticate();
    console.log("数据库连接成功");
  } catch (err) {
    console.log("连接失败");
  }
  next();
}
