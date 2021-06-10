"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
 * @desc 支持json, form, text 类型的 body
 * 引入中间件后，会在ctx.request.body放入请求的参数
 */
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
// 设置跨域中间件
const cors = require("koa2-cors");
/** 装饰器示例 */
const decorator_1 = __importDefault(require("./practiceTs/decorator"));
decorator_1.default();
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
    .use(views(path_1.default.join(__dirname + '../views/pug'), { extension: 'pug' }))
    .use(koaStatic(path_1.default.join(__dirname + '../views/public')))
    .use(koa_bodyparser_1.default())
    .use(router.routes());
router.get('/', (ctx) => {
    ctx.response.body = 'hello koa-typescript';
});
/**
 * @desc 渲染pug页面
 */
router.get('/pug/', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    /**
     * @desc 因为render内部读取文件是异步的  所以render也是异步的，所以加await
     */
    yield ctx.render('pug');
    /**
     *  render前不加 await 就会返回如下同步操作内容
     */
    // ctx.response.body = '同步'
}));
/**
 * @desc 以下为 api 接口
 */
const index_1 = __importDefault(require("./controllers/api/index"));
index_1.default(router);
/**
 * @desc 以下为 部分数据库 api 接口
 */
const index_2 = __importDefault(require("./controllers/databaseOperate/index"));
index_2.default(router);
/**
 * @desc puppeteer
 */
const puppeteer_1 = require("./puppeteer/puppeteer");
router.get('/api/puppeteer/screen', (ctx) => {
    puppeteer_1.screen();
    ctx.response.body = 2333;
});
/**
 * 监听报错信息
 */
app.on('error', err => console.error(`error occured: ${err.message}`));
const port = 2500;
app.listen(port, () => {
    console.log(`listen on port: ${port}`);
});
