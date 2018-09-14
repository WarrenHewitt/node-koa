const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

app.use(router.routes())

router.get('/', (ctx: any) => {
    ctx.response.body = '12333'
})

app.listen(1112, () => {
    console.log('listen on port: 1112');
});