'use strict'

const fs = require('fs')
const path = require('path')
const os = require('os')
const Koa = require('koa')
const Router = require('koa-router')
const session = require('koa-session')


// resolve across-domain problem
const cors = require('koa2-cors')

// static resource
const serve = require('koa-static')

const app = new Koa();
const router = new Router();

// resolve upload data problem
const koaBody = require('koa-body')

// template
const views = require('koa-views')


app
    .use(serve(__dirname + '/file'))
    .use(views(__dirname + '/views', { extension: 'pug' }))
    .use(cors({
        origin: function (ctx) {
            return 'http://localhost:1111';
        },
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 5,
        credentials: true,
        allowMethods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    }))
    .use(router.routes())
    .use(router.allowedMethods())
    .use(session({
        key: 'name:klicen', /** (string) cookie key (default is koa:sess) */
        /** (number || 'session') maxAge in ms (default is 1 days) */
        /** 'session' will result in a cookie that expires when session/browser is closed */
        /** Warning: If a session cookie is stolen, this cookie will never expire */
        maxAge: 86400000,
        overwrite: true, /** (boolean) can overwrite or not (default true) */
        httpOnly: true, /** (boolean) httpOnly or not (default true) */
        signed: true, /** (boolean) signed or not (default true) */
        rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
        renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
    }, app))

const main = async function(ctx) {
    const data = ctx.request.body.files.data;
    const savePath = path.join(`./files`, data.name)
    const reader = fs.createReadStream(data.path)
    const writer = fs.createWriteStream(savePath)
    reader.pipe(writer)

    ctx.body = 'http://localhost:1112/' + data.name
}

const file = require('./app/file');

router.post('/api/files', koaBody({ jsonLimit: '2mb' }), file.upBase64)
router.post('/api/files/i', koaBody({ jsonLimit: '2mb', multipart: true }), async (ctx) => {
    const data = ctx.request.body.files.data;
    const savePath = path.join(`./files`, data.name)
    const reader = fs.createReadStream(data.path)
    const writer = fs.createWriteStream(savePath)

    const pro =new Promise( (resolve, reject) => {
        var stream = reader.pipe(writer);

        stream.on('finish', function () {
            resolve(`http://localhost:1112/${data.name}`);
        });
    })

    console.log(await pro)
    
    ctx.response.body =  await pro
    
})

function uid() {
    return Math.random().toString(36).slice(2);
  }

router.get('/nnn', (ctx, next) => {
    ctx.response.body = '1222'
})

// return html page
router.get('/', (ctx, next) => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./views/index.html');

    return next();
})

router.get('/static', async (ctx, next) => {
    await ctx.render('test')

    //return next();
})

router.get('/html', (ctx, next) => {
    console.log(ctx.cookies.get('SESSION')); 
    ctx.cookies.set('name', 'klice')
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./dist/index.html');

    return next();
    /* var a = {
        fields: { name: '1.png' },
        files: {
                data:
                    File {
                        domain: null,
                        _events: { },
                        _eventsCount: 0,
                        _maxListeners: undefined,
                        size: 647705,
                        path: 'C:\\Users\\HeWei\\AppData\\Local\\Temp\\upload_993d1451ef1c810b9b8a341e6bd3fd66',
                        name: '1.png',
                        type: 'image/png',
                        hash: null,
                        lastModifiedDate: 2018-03 - 30T03: 10: 26.855Z,
                            _writeStream: [Object]
                    } 
        } 
    } */
})


app.listen(1112, () => {
    console.log('http://localhost:1112');
});