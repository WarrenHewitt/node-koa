import Koa from 'koa'
import Router from 'koa-router'

/**
 * @description 当没有默认导出时要用 * 防止报错
 */
import * as api from './controllers/api'
import * as file from './controllers/file'

const app = new Koa()
const router = new Router()

app.use(router.routes())

router.get('/', (ctx: any) => {
    ctx.response.body = 'hello koa-typescript'
})

router.get('/api/names/', api.getNames)
router.get('/api/table-list/', api.getTableList)

router.get('/page/:path', file.renderSPA)
router.get('/html/:htmlFileName', file.renderHtml)

app.listen(2500, () => {
    console.log('listen on port: 2500');
});