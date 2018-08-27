const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors')
const app = new Koa()
const router = new Router()

const koaBody = require('koa-body')
const session = require('koa-session')

const sessionConfig = {
    key: '', /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
}

app
    .use(cors({
        origin: function (ctx) {
            console.log(ctx.header);
            return ctx.header.origin;
            // return 'http://172.16.12.80:1200';
        },
        // exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        // maxAge: 5,
        // credentials: true,
        // allowMethods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
        // allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    }))
    .use(router.routes())
    .use(session(sessionConfig, app))

// self-driving
const sd = require('./object/self-driving')
// sd(router)

// refactor
const cg = require('./object/cg')
cg(router)

router.get('/', (ctx) => {
    ctx.response.body = 'success'
})

app.listen(1200, () => {
    console.log('http://localhost:2018');
});