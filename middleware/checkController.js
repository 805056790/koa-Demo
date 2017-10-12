import fs from 'fs';
import router from '../router'

export default async function checkController(ctx, next) {
  fs.readdir("./controller", 'utf-8', function (err, data) {
    console.log(data);
    for (let url of data) {
      let controller = require(process.cwd() + '/controller/' + url);
      for (let route in controller.default) {
        let verb = route.split(" ")[0];
        let url = route.split(" ")[1];
        console.log(route)
        console.log(url);
        console.log(typeof controller.default[route])
        switch (verb.toLowerCase()) {
          case 'get':
            router.get(url, controller.default[route]);
            break;
          case 'post':
            router.post(url, controller.default[route]);
            break;
          case 'put':
            router.put(url, controller.default[route]);
            break;
          case 'del':
            router.del(url, controller.default[route]);
            break;
          default:
            router.all(url, controller.default[route]);
            break;
        }
      }
    }
  });
  next();
}