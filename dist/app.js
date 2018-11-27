"use strict";
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
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
/**
 * @description 当没有默认导出时要用 * 防止报错
 */
const api = __importStar(require("./controllers/api"));
const file = __importStar(require("./controllers/file"));
const app = new koa_1.default();
const router = new koa_router_1.default();
app.use(router.routes());
router.get('/', (ctx) => {
    ctx.response.body = 'hello koa-typescript';
});
router.get('/api/names/', api.getNames);
router.get('/api/table-list/', api.getTableList);
router.get('/page/:path', file.renderSPA);
router.get('/html/:htmlFileName', file.renderHtml);
app.listen(2500, () => {
    console.log('listen on port: 2500');
});
//# sourceMappingURL=app.js.map