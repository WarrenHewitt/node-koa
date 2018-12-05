import path from 'path'
import Koa from 'koa'
import Router from 'koa-router'
import koaStatic from 'koa-static'

/**
 * @description 当没有默认导出时要用 * 防止报错
 */
import * as api from './controllers/api'
import * as file from './controllers/file'

const app = new Koa()
const router = new Router()

app
    .use(async (ctx, next) => {
        console.log(ctx.request.header.origin);
        ctx.set("Access-Control-Allow-Origin", ctx.request.header.origin)
        await next()
    })
    .use(koaStatic(path.join(__dirname + '/views/kmh')))
    .use(router.routes())


router.get('/', (ctx: any) => {
    ctx.response.body = 'hello koa-typescript'
})

/**
 * @desc 以下两个接口用于单页面路由与indexedDB
 */
router.get('/page/:path', file.renderSPA)
router.get('/html/:htmlFileName', file.renderHtml)

router.get('/kmh', file.kmh)


/**
 * @desc 以下为 vue-admin 的 api 接口
 */
router.get('/api/names/', api.getNames)
router.get('/api/table-list/', api.getTableList)

router.post('api/upload', file.kmh)

app.listen(2500, () => {
    console.log('listen on port: 2500');
});