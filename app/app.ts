import path from 'path'
import Koa from 'koa'
import Router from 'koa-router'
import koaStatic from 'koa-static'
import views from 'koa-views'
import bodyParser from 'koa-bodyparser'
import multer from 'koa-multer'

/**
 * @description 当没有默认导出时要用 * 防止报错
 */
import * as api from './controllers/api'
import * as file from './controllers/file'

const app = new Koa()
const router = new Router()

const upload = multer({ dest: path.join(__dirname + '/uploadFiles/') })

app
    .use(bodyParser())
    .use(views(path.join(__dirname + '/views/pug'), { extension: 'pug' }))
    .use(koaStatic(path.join(__dirname + '/views/kmh')))
    .use(router.routes())


router.get('/', (ctx: any) => {
    ctx.response.body = 'hello koa-typescript'
})

/**
 * @desc 以下两个接口用于单页面路由与indexedDB
 */
router.get('/page/:path/', file.renderSPA)
router.get('/html/:htmlFileName/', file.renderHtml)

/**
 * @desc 渲染pug页面
 */
router.get('/pug/', async (ctx: any) => {
    await ctx.render('test')
})


/**
 * @desc 以下为 vue-admin 的 api 接口
 */
router.get('/api/names/', api.getNames)
router.get('/api/table-list/', api.getTableList)

router.post('/api/upload/', upload.single('file'), file.uploadFile) 

app.on('error', err => console.error(`Unhandled exception occured. message: ${err.message}`));

app.listen(2500, () => {
    console.log('listen on port: 2500');
});