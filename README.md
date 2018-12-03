# 使用Koa2+TypeScript 实现的示例

## Config
1. 配置tsconfig.json文件

## Install
- @types/koa
- @types/koa-router
- @types/node  可以引入node相关所有包

## 开始
执行如下命令

- npm start  (tsc -w ：监听ts文件的变化)
- npm run node (nodemon dist/app.js : 监听生成的js文件变化，随时更新node服务)


# 语法

## koa-router 
- /page/:path  利用 ctx.params.path 获取

## Request

- 当没有默认导出时要用 * 防止报错  import * as api from './controllers/api'

- ctx.request.query：获取query string参数 以{ key:value } 形式返回