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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_static_1 = __importDefault(require("koa-static"));
const koa_views_1 = __importDefault(require("koa-views"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_multer_1 = __importDefault(require("koa-multer"));
/**
 * @description 当没有默认导出时要用 * 防止报错
 */
const api = __importStar(require("./controllers/api"));
const file = __importStar(require("./controllers/file"));
const app = new koa_1.default();
const router = new koa_router_1.default();
const upload = koa_multer_1.default({ dest: path_1.default.join(__dirname + '/uploadFiles/') });
app
    .use(koa_bodyparser_1.default())
    .use(koa_views_1.default(path_1.default.join(__dirname + '/views/pug'), { extension: 'pug' }))
    .use(koa_static_1.default(path_1.default.join(__dirname + '/views/kmh')))
    .use(router.routes());
router.get('/', (ctx) => {
    ctx.response.body = 'hello koa-typescript';
});
/**
 * @desc 以下两个接口用于单页面路由与indexedDB
 */
router.get('/page/:path', file.renderSPA);
router.get('/html/:htmlFileName', file.renderHtml);
/**
 * @desc 渲染pug页面
 */
router.get('/pug', (ctx) => __awaiter(this, void 0, void 0, function* () {
    yield ctx.render('test');
}));
router.get('/kmh', file.kmh);
/**
 * @desc 以下为 vue-admin 的 api 接口
 */
router.get('/api/names/', api.getNames);
router.get('/api/table-list/', api.getTableList);
router.post('/api/upload/', upload.single('file'), file.uploadFile);
app.on('error', err => console.error(`Unhandled exception occured. message: ${err.message}`));
app.listen(2500, () => {
    console.log('listen on port: 2500');
});
//# sourceMappingURL=app.js.map