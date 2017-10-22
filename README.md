# node-es6-start-kit

### 使用方法

> git clone https://github.com/yezidd/node-es6-start-kit-.git

> yarn || npm install

> 这样就可以在node中愉快的使用ES6语法了

> 修改具体的入口文件请看package.json

> 默认使用了nodemon作为监听文件的工具

### 现在这个状态

> 实现了通过自己读取文件来实现路由的基本

> 下一步会接入koa-router来实现路由的功能

### 接入koa-router

> 明白router的工作原理

> 并实现基础的渲染

> 接入了koa-router的demo

> 查看文档，明白koa-router的使用方法["https://github.com/alexmingoia/koa-router/tree/master#module_koa-router--Router+get%7Cput%7Cpost%7Cpatch%7Cdelete%7Cdel"]

> koa-router支持给url设置别名

``` javascript
router.get('user', '/users/:id', function (ctx, next) {
// ...
});

router.url('user', 3);
// => "/users/3"
```

>上述设置了别名user，下次url指代的user就是之前的路由

> koa-router的中间件

> 看到koa-router的中间价 ，决定去看一下koa本身的中间件，然后实现一下自定义的中间件

> koa中间件的实现原理是本身koa会存在一个middleware的属性，存在中间件数组

> 每次use就会将 中间件判断之后 存入这个数组之中，然后在listen的时候，通过注入到回调函数来运行

> 主要是对context这个对象进行操作

> 然后用next()函数来交给到下一个中间件

``` javascript
	async function logger(ctx,next){
		const startDate = new Date();
  		next();
  		console.log(`method: ${ctx.method} code: ${ctx.status} time:${new Date() -startDate}ms`);
	}
	app.use(logger);
```

> 看完了koa-router的文档，写的还算是清晰，就是那个router的allowMethod不是很清楚

### 现在开始看一下那个英文的router的allowMethod

> 这个函数接收一个object{throw:boolean,notImplemented:function,methodNotAllowed:function}

> throw字段是是否报错而不是设置状态头

> notImplemented当router没有声明的时候所操作的函数

> methodNotAllowed当router的路由不被允许访问的时候返回的函数

```javascript
    const Koa = require('koa');
    const Router = require('koa-router');
    const Boom = require('boom');
    
    const app = new Koa();
    const router = new Router();
    
    app.use(router.routes());
    app.use(router.allowedMethods({
      throw: true,
      notImplemented: () => new Boom.notImplemented(),
      methodNotAllowed: () => new Boom.methodNotAllowed()
    }));
```
### 下面接入了Sequelize准备开始了数据库的操作

> 第一步是设置数据库，所有的文件都在model文件夹中

> 这边写了一个中间件用来读取model中所有的文件

> 然后自动化的将数据库部署到mysql中

> 具体看middleware中的checkModel文件

> 中间件不应该忘记写next函数防止下面的koa中间件走不到

> 下面将一个商城所需要数据库都准备好

> api这些操作准备参考

> [商城实战]("git@github.com:skyvow/m-mall-admin.git")这个开源的项目

> 现在开始动手

### controller也通过读取文件加载的方式来加载了

> 使用方法

> 在controller文件中定义方法，然后导出的样例

``` javascript
   export default {
   'GET ／': function
   }
```

> 这样就可以进行路由的对应了

#### 现在的话model已经全部定义完成了
#### 接下来需要接入准备的各种第三方中间件
#### 加入静态资源的加载和模版引擎，实现网页的加载

#### 加入了react作为前端的渲染视图模版

> 通过webpack的配置，监听文件修改即实时打包，然后开启koa的服务器加载webpack打包出来的bundle文件

> 这样不知道有没有性能问题，但是现在的情况是可行的

> 查看简单的webpack配置文件

> 代码如下:

``` javascript 1.5
/**
 * Created by panca on 16/8/14.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: [path.resolve(__dirname, './src/index.js')],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.svg/, loader: 'svg-url-loader'}
    ]
  },
  plugins: [
  ]
};
```

> 可以看出我通过百度已经查看了并且加入了svg的loader

> 但是我在加载这个bundle的时候，发现svg文件导入错误

> 接下来我试一下图片文件

> 现在的项目框架应该已经搭建完成
