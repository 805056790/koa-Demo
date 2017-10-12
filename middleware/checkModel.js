import fs from 'fs';


//通过node中的扫描文件来导入model中所有的文件进行数据库的建立
export default async function checkModel(ctx, next) {
  console.log("这边就是model所有的文件");
  fs.readdir("./model", 'utf-8', function (err, data) {
    for (let modelName of data) {
      let model = require(process.cwd() + '/model/' + modelName);
      //这边可能是babel转码的缘故，这个对象变成了{default:user},使用require导入的花
      model.default.sync({force: true}).then(() => {
        //每一次运行都要重置数据库
        console.log("---数据库重置完成")
      });
    }
  });
  next();
}