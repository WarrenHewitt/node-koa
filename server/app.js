"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
const koa_static_1 = __importDefault(require("koa-static"));
const koa_views_1 = __importDefault(require("koa-views"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
// 设置跨域中间件
const koa2_cors_1 = __importDefault(require("koa2-cors"));
const app = new koa_1.default();
const router = new koa_router_1.default();
app
    .use(koa2_cors_1.default({
    origin: function (ctx) {
        console.log(ctx.header.origin);
        return 'http://localhost:3096';
    },
    // 当前端的 credentials 是true时，这里也必须是true
    credentials: true
}))
    .use(koa_bodyparser_1.default())
    .use(koa_views_1.default(path_1.default.join(__dirname + '/views/pug'), { extension: 'pug' }))
    .use(koa_static_1.default(path_1.default.join(__dirname + '/views/kmh')))
    .use(router.routes());
router.get('/', (ctx) => {
    ctx.response.body = 'hello koa-typescript';
});
/**
 * @desc 渲染pug页面
 */
router.get('/pug/', (ctx) => __awaiter(this, void 0, void 0, function* () {
    yield ctx.render('test');
}));
/**
 * @desc 以下为 api 接口
 */
const adminApi = require('./controllers/api/index.js');
adminApi.api(router);
app.on('error', err => console.error(`Unhandled exception occured. message: ${err.message}`));
const port = 2500;
app.listen(port, () => {
    console.log(`listen on port: ${port}`);
});
//# sourceMappingURL=app.js.map