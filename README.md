[toc]
# 使用Koa2+TypeScript 实现的示例

> 相关文件夹 ./app/ 和 ./server/

## Config
1. 配置tsconfig.json文件

[配置文档：https://www.typescriptlang.org/docs/home.html](https://www.typescriptlang.org/docs/home.html)

## install

## 开始
执行如下命令

- npm start 启动 node 服务  （查看startServer.js）利用 child_process 的 exec 模块


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

##  数据库

`/app/database`  有 Mongo 和 MySQL

## 爬虫

`/app/puppeteer`
用的 puppeteer 库

# graphql 

`/graphql/`

执行：npm run gql

数据库：采用 mongodb 驱动 连接mongoDB


# 目录说明

```
|- node-koa
    |- app  (主要的功能代码)
        |- app.ts
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



