"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @des 当没有默认导出时要用 * 防止报错
 */
const file = __importStar(require("./file"));
const restFul = __importStar(require("./restFul"));
// import financial from './financial'
/**
 * @des 操作 multipart/form-data
 */
const koa_busboy_1 = __importDefault(require("koa-busboy"));
const uploader = (0, koa_busboy_1.default)({
    dest: 'server/tempFiles',
    /* 其它参数参考 https://github.com/dominhhai/koa-busboy */
    // dest: path.join(__dirname , '../../../tempFiles/'),
    fnDestFilename: (fieldname, filename) => {
        console.log(fieldname, filename);
        return 'fileup';
    }
});
exports.default = (router) => {
    /**
     * @des 测试restFul 接口, 以及参数的获取
     */
    router.get('/api/resF/', restFul.restGet);
    router.post('/api/resF/', restFul.restPost);
    router.put('/api/resF/', restFul.restPut);
    /**
     * @des 接收 FormData 上传的数据，文件
     */
    router.post('/api/upload/', file.upFormData);
    /**
    * @des 以下两个接口用于单页面路由与indexedDB
    *  示例：http://localhost:2500/page/one/
     */
    router.get('/page/:path/', file.renderSPA);
    // 示例：http://localhost:2500/html/a/
    router.get('/html/:htmlFileName/', file.renderHtml);
    /**
     * @des 修改/data/data.json文件
     */
    router.post('/api/updateFinancialData/', file.updateFileContent);
    /**
     * @des vue-admin financial板块
     */
    /**
     * 获取所有的company
     */
    // router.get('/api/financial/company/',financial.getCompany)
    // router.get('/api/financial/product/',financial.getProducts)
    // router.post('/api/financial/product/',financial.productUpdate)
    /**
     * @des  for work test
     */
};
