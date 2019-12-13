"use strict";
exports.__esModule = true;
var path_1 = require("path");
/**
 * @des 操作 multipart/form-data
 */
var koa_multer_1 = require("koa-multer");
/**
 * @des 当没有默认导出时要用 * 防止报错
 */
var file = require("./file");
var restFul = require("./restFul");
// import financial from './financial'
var upload = koa_multer_1["default"]({ dest: path_1["default"].join(__dirname + '/uploadFiles/') });
exports["default"] = (function (router) {
    /**
     * @des 测试restFul 接口
     */
    router.get('/api/res/get/', restFul.restGet);
    router.post('/api/res/post/', restFul.restPost);
    router.put('/api/res/put/', restFul.restPut);
    // 上传文件
    router.post('/api/upload/', upload.single('file'), file.uploadFile);
    /**
    * @des 以下两个接口用于单页面路由与indexedDB
    *  事例：http://localhost:2500/page/one；http://localhost:2500/html/a/
    */
    router.get('/page/:path/', file.renderSPA);
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
});
