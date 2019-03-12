import path from 'path'
import Koa from 'koa'
import Router from 'koa-router'
import koaStatic from 'koa-static'
import views from 'koa-views'
import bodyParser from 'koa-bodyparser'

// 设置跨域中间件
import cors from 'koa2-cors'

const app = new Koa()
const router = new Router()

app
    .use(cors({
        origin: function(ctx) {
            console.log(ctx.header.origin);
            return 'http://localhost:3096'
        },
        // 当前端的 credentials 是true时，这里也必须是true
        credentials: true
    }))
    .use(bodyParser())
    .use(views(path.join(__dirname + '/views/pug'), { extension: 'pug' }))
    .use(koaStatic(path.join(__dirname + '/views/kmh')))
    .use(router.routes())

router.get('/', (ctx: any) => {
    ctx.response.body = 'hello koa-typescript'
})

/**
 * @desc 渲染pug页面
 */
router.get('/pug/', async (ctx: any) => {
    await ctx.render('test')
})

/**
 * @desc 以下为 api 接口
 */
const adminApi = require('./controllers/api/index.js')
adminApi.api(router)

app.on('error', err => console.error(`Unhandled exception occured. message: ${err.message}`));

const port = 2500
app.listen(port, () => {
    console.log(`listen on port: ${port}`);
});