[toc]
# 使用Koa2+TypeScript 实现的示例

相关文件夹 ./app/ 和 ./server/

启动项目  

`yarn install` `yarn start` （查看startServer.js）利用 child_process 的 exec 模块

## Config
1. 配置tsconfig.json文件

配置文档：https://www.typescriptlang.org/docs/home.html

## 项目内容描述
- REST请求

- 表单数据上传

- 文件上传

### node 脚本操作
- html，pug模板的渲染

- 移动文件与文件夹 `/moveFileOrFloder`

- 生成 markdown 目录

更多参见 [目录说明](#目录说明)

---

## 使用的包

- `puppeteer` Node 库，它提供了一个高级 API 来通过 DevTools 协议控制 Chromium 或 Chrome,爬取页面生成 pdf； 文档：https://github.com/zhaoqize/puppeteer-api-zh_CN

##  数据库

`/app/database`  有 Mongo 和 MySQL  有 mongodb 和 mongoose 用法，后续会持续更新 mongoose

## 爬虫

`/app/puppeteer`
用的 puppeteer 库

# graphql 

`/graphql/`

执行：npm run gql

数据库：采用 mongodb 驱动 连接mongoDB

# 目录说明

## /server

该文件是ts编译后的文件，也是项目执行的主文件

## /practice 

文件下的为使用js 写的一些 node 练习

```
|- node-koa
    |- app  ts编写的功能代码
        |- app.ts  入口文件
        |- controllers
            |- api
                |- api.ts
                |- file.ts
                |- financial.ts
                |- index.ts
                |- restFul.ts
            |- databaseOperate 数据库操作
        |- database
            |- mongo.ts  使用mongoose连接数据库
            |- mysql.ts
        |- tsGrammar  ts的一些语法练习
        |- utils
            |- common.ts

        |- puppeteer puppeteer库的实践   
    |- graphql  (graphql 实践)
        |- database.js
        |- gql.js

    |- practice  (实践部分)
        |- batTest  (.bat和.sh 语法实践 )
            |- test
                |- test.js
            |- test.bat
        |- childProcess  (实践)
            |- childProcess.js
        |- customNodeModule  (自定义 node 包，通过包名引入)
        |- folderForMd.js  (生成 markdown可用的目录)
        |- generatorTemplate  (命令行交互生成模板实践)
            |- generatorTemplate.js
            |- inquirer.js
            |- process.js
            |- readline.js
        |- jsonFileConfig  (读写 json 文件)
            |- config.json
            |- index.js
        |- moveFileOrFloder  (文件或文件夹删除复制实践)
            |- index.js
        |- practice.js
    
    |- server  ts编译后的文件和需要直接放在这里执行的 js 文件
        |- views 包括静态资源 img pug html 等

    |- startServer.js  (启动ts项目脚本)
    |- tsconfig.json  (ts配置文件)
```



