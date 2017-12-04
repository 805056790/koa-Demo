import fs from 'fs';
import router from '../router'

export default async function checkController() {
  fs.readdir("./controller", 'utf-8', function (err, data) {
    console.log(data);
    for (let url of data) {
      let controller = require(process.cwd() + '/controller/' + url);
      for (let routeInfo in controller.default) {
        let verb;
        verb = routeInfo.split(" ")[0];
        let url = routeInfo.split(" ")[1];
        switch (verb.toLowerCase()) {
          case 'get':
            router.get(url, controller.default[routeInfo]);
            break;
          case 'post':
            router.post(url, controller.default[routeInfo]);
            break;
          case 'put':
            router.put(url, controller.default[routeInfo]);
            break;
          case 'del':
            router.del(url, controller.default[routeInfo]);
            break;
          default:
            router.all(url, controller.default[routeInfo]);
            break;
        }
      }
    }
  });
}