"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
 * @desc 单页面路由实现
 */
function renderSPA(ctx, next) {
    // console.log('/:path', ctx.params.path);
    ctx.response.type = 'html';
    ctx.response.body = fs_1.default.createReadStream('./server/views/html/singlePageRoute.html');
    return next();
}
exports.renderSPA = renderSPA;
/**
 * @desc 根据获取的参数渲染 views/html 中的 html 文件
 */
function renderHtml(ctx, next) {
    const pages = ['indexedDB', 'a'];
    let name = ctx.params.htmlFileName;
    name = pages.indexOf(name) > -1 ? name : pages[0];
    ctx.response.type = 'html';
    ctx.response.body = fs_1.default.createReadStream(`./server/views/html/${name}.html`);
    return next();
}
exports.renderHtml = renderHtml;
// 保存通过base64 方式传过来的图片
exports.upBase64 = (ctx) => {
    const data = ctx.request.body;
    const base64 = data.data;
    const buffer = new Buffer(base64, 'base64');
    fs_1.default.writeFile(`files/a.txt`, buffer, (err) => {
        if (err)
            throw err;
        console.log('saved!');
    });
    ctx.body = 'ok';
};
// 保存通过formData 方式传过来的图片
exports.upFormData = (ctx) => {
    const data = ctx.request.body.files.data;
    const savePath = path_1.default.join(`./files`, data.name);
    const reader = fs_1.default.createReadStream(data.path);
    const writer = fs_1.default.createWriteStream(savePath);
    // ctx.body = 'http://localhost:1112/' + data.name
    console.log(reader.pipe(writer));
    ctx.body = 'http://localhost:1112/' + data.name;
};
/**
 * @desc 接收上传的excel等文件
 */
exports.uploadFile = (ctx, next) => {
    console.log(ctx);
    // const data = ctx.request.body.file.data;
    // const savePath = path.join(`./`, data.name)
    // const reader = fs.createReadStream(data.path)
    // const writer = fs.createWriteStream(savePath)
    // // ctx.body = 'http://localhost:1112/' + data.name
    // console.log(reader.pipe(writer), savePath)
    // ctx.body = 'http://localhost:1112/' + data.name 
    ctx.body = 'http://localhost:1112/';
    next();
};
//# sourceMappingURL=file.js.map