import fs from 'fs';
import sequelize from '../config/sequelize'

//通过node中的扫描文件来导入model中所有的文件进行数据库的建立
export default async function checkModel(ctx, next) {
  console.log("这边就是model所有的文件");
  fs.readdir("./model", 'utf-8', function (err, data) {
    for (let modelName of data) {
      let model = require(process.cwd() + '/model/' + modelName);
    }
    sequelize.sync();
    console.log('init db ok.');
  });

  next();
}