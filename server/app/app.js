"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
/**
 * @des 静态文件服务 包含在根目录下的所有文件可通过链接直接访问
 * 某些模块，需要用ts的方式引入（如下）
 */
const koaStatic = require("koa-static");
/**
 * @desc 支持多个模板pug ejs等 参考 https://github.com/tj/consolidate.js 当选择了模板后还要安装该模板
 * @desc 用在路由之前
 */
const views = require("koa-views");
/**
 * @desc 可以获取 application/json 和  multipart/form-data 的数据
 */
const koa_body_1 = __importDefault(require("koa-body"));
// 设置跨域中间件
const cors = require("koa2-cors");
const app = new koa_1.default();
const router = new koa_router_1.default();
app
    .use(cors({
    origin: function (ctx) {
        return ctx.header.origin;
    },
    // 当前端的 credentials 是true时，这里也必须是true
    credentials: true
}))
    .use(koaStatic(path_1.default.join(__dirname, '../views/public')))
    .use(views(path_1.default.join(__dirname, '../views/pug'), { extension: 'pug' }))
    .use((0, koa_body_1.default)({
    multipart: true,
    formidable: {
        uploadDir: path_1.default.join(__dirname, '../tempFiles')
    }
}))
    .use(router.routes());
router.get('/', (ctx) => {
    ctx.response.body = 'hello koa-typescript';
});
/** 装饰器示例 */
const decorator_1 = __importDefault(require("./tsGrammar/decorator"));
router.get('/decorator', (ctx) => {
    (0, decorator_1.default)();
    ctx.response.body = '请查看服务器控制台，输出信息';
});
/**
 * @desc 渲染pug页面
 */
router.get('/pug/', async (ctx) => {
    /**
     * @desc 因为render内部读取文件是异步的  所以render也是异步的，所以加await
     */
    await ctx.render('pug');
    /**
     *  render前不加 await 就会返回如下同步操作内容
     */
    // ctx.response.body = '同步'
});
/**
 * @desc 以下为 api 接口
 */
const index_1 = __importDefault(require("./controllers/api/index"));
(0, index_1.default)(router);
/**
 * @desc 以下为 部分数据库 api 接口
 */
const index_2 = __importDefault(require("./controllers/databaseOperate/index"));
(0, index_2.default)(router);
/**
 * @desc puppeteer
 */
const puppeteer_1 = require("./puppeteer/puppeteer");
router.get('/api/puppeteer/screen', (ctx) => {
    (0, puppeteer_1.screen)();
    ctx.response.body = 2333;
});
/**
 * 监听报错信息
 */
app.on('error', err => console.error(`error occured: ${err.message}`));
const port = 2500;
app.listen(port, () => {
    console.log(`listen on port(default 2500): ${port}`);
});
