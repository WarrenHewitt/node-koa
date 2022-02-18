import path from 'path'
import Koa from 'koa'
import Router from 'koa-router'

/**
 * @des 静态文件服务 包含在根目录下的所有文件可通过链接直接访问
 * 某些模块，需要用ts的方式引入（如下） 
 */
import koaStatic = require('koa-static')

/**
 * @desc 支持多个模板pug ejs等 参考 https://github.com/tj/consolidate.js 当选择了模板后还要安装该模板
 * @desc 用在路由之前
 */
import views = require('koa-views')

/**
 * @desc 可以获取 application/json 和  multipart/form-data 的数据
 */
import koaBody from 'koa-body'

// 设置跨域中间件
import cors = require('koa2-cors')

const app = new Koa()
const router = new Router()

app
    .use(cors({
        origin: function(ctx: any) {
            return ctx.header.origin
        },
        // 当前端的 credentials 是true时，这里也必须是true
        credentials: true
    }))
    .use(koaStatic(path.join(__dirname, '../views/public')))
    .use(views(path.join(__dirname, '../views/pug'), { extension: 'pug' }))
    .use(koaBody({ 
        multipart: true,
        formidable: { 
            uploadDir: path.join(__dirname, '../tempFiles')
        }
    }))
    .use(router.routes())

router.get('/', (ctx: any) => {
    ctx.response.body = 'hello koa-typescript'
})


/** 装饰器示例 */
import dec from './tsGrammar/decorator'
router.get('/decorator', (ctx: any) => {
    dec();
    ctx.response.body = '请查看服务器控制台，输出信息'
})

/**
 * @desc 渲染pug页面
 */
router.get('/pug/', async (ctx: any) => {
    /**
     * @desc 因为render内部读取文件是异步的  所以render也是异步的，所以加await
     */
    await ctx.render('pug')
    
    /**
     *  render前不加 await 就会返回如下同步操作内容
     */
    // ctx.response.body = '同步'
})

/**
 * @desc 以下为 api 接口
 */
import adminApi from './api/index';
adminApi(router)

/**
 * @desc 以下为 部分数据库 api 接口
 */
import databaseApi from './controllers/databaseOperate/index';
databaseApi(router)

/**
 * @desc puppeteer
 */
import { screen } from './puppeteer/puppeteer';
router.get('/api/puppeteer/screen', (ctx: any) => {
    screen()
    ctx.response.body = 2333
})

 
/**
 * 监听报错信息
 */
app.on('error', err => console.error(`error occured: ${err.message}`));

const port = 2500
app.listen(port, () => {
    console.log(`listen on port(default 2500): ${port}`);
});