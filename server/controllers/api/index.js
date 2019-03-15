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
const path_1 = __importDefault(require("path"));
/**
 * @desc 操作 multipart/form-data
 */
const koa_multer_1 = __importDefault(require("koa-multer"));
/**
 * @desc 当没有默认导出时要用 * 防止报错
 */
const file = __importStar(require("./file"));
const api = __importStar(require("./api"));
const upload = koa_multer_1.default({ dest: path_1.default.join(__dirname + '/uploadFiles/') });
exports.api = (router) => {
    // 上传文件
    router.post('/api/upload/', upload.single('file'), file.uploadFile);
    /**
    * @desc 以下两个接口用于单页面路由与indexedDB
    *  事例：http://localhost:2500/page/one；http://localhost:2500/html/a/
    */
    router.get('/page/:path/', file.renderSPA);
    router.get('/html/:htmlFileName/', file.renderHtml);
    /**
     * 修改/data/data.json文件
     */
    router.post('/api/updateFinatialData/', file.updateFileContent);
    /**
     * @desc  for work test
     */
    router.get('/api/myNode/vList/', api.vList);
    router.get('/api/myNode/record/', api.getRecord);
};
//# sourceMappingURL=index.js.map