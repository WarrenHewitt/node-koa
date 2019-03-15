import path from 'path'
import Koa from 'koa'
import Router from 'koa-router'

// 静态文件服务 包含在根目录下的所有文件可通过链接直接访问
import koaStatic from 'koa-static'

/**
 * @desc 支持多个模板pug ejs等 参考https://github.com/tj/consolidate.js 当选择了模板后还要安装该模板
 * @desc 用在路由之前
 */
import views from 'koa-views'

/**
 * @desc 支持json, form, text 类型的 body
 */
import bodyParser from 'koa-bodyparser'

// 设置跨域中间件
import cors from 'koa2-cors'

const app = new Koa()
const router = new Router()

app
    .use(cors({
        origin: function(ctx) {
            return ctx.header.origin
        },
        // 当前端的 credentials 是true时，这里也必须是true
        credentials: true
    }))
    .use(views(path.join(__dirname + '/views/pug'), { extension: 'pug' }))
    .use(koaStatic(path.join(__dirname + '/views/public')))
    .use(bodyParser())
    .use(router.routes())

router.get('/', (ctx: any) => {
    ctx.response.body = 'hello koa-typescript'
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
const adminApi = require('./controllers/api/index.js')
adminApi.api(router)

/**
 * 监听报错信息
 */
app.on('error', err => console.error(`error occured: ${err.message}`));

const port = 2500
app.listen(port, () => {
    console.log(`listen on port: ${port}`);
});