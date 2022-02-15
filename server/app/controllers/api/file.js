"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFileContent = exports.upFormData = exports.upBase64 = exports.renderHtml = exports.renderSPA = void 0;
/**
 * @desc 文件处理相关操作
 */
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
 * 格式化时间
 */
const dayjs_1 = __importDefault(require("dayjs"));
/**
 * @desc 单页面路由实现
 */
function renderSPA(ctx, next) {
    /**
     * 路由中使用/:paramsName,可以用ctx.params.paramsName获取参数
     */
    console.log(ctx.params.path); // one
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
/**
 * @desc 保存通过base64 方式传过来的图片
 */
const upBase64 = (ctx) => {
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
exports.upBase64 = upBase64;
/**
 * @desc 保存通过formData 方式传过来的图片
 */
const upFormData = (ctx) => {
    console.log('233333', ctx.request.body);
    // const data = ctx.request.body.files.data;
    // const savePath = path.join(`./files`, data.name)
    // const reader = fs.createReadStream(data.path)
    // const writer = fs.createWriteStream(savePath)
    // console.log(reader.pipe(writer))
    // ctx.body = 'http://localhost:1112/' + data.name 
    ctx.body = 'success';
};
exports.upFormData = upFormData;
/**
 * @desc 更新data/data.json文件中的数据
 */
const updateFileContent = async (ctx) => {
    const { company, product, change } = ctx.request.body;
    const updateData = (data) => {
        const database = JSON.parse(data);
        const item = database[company][product];
        const oldTotal = item[item.length - 1] ? item[item.length - 1].total : 0;
        database[company][product].push({
            total: oldTotal + change,
            change,
            date: (0, dayjs_1.default)(Date()).format('YYYY-MM-DD HH:mm:ss')
        });
        return JSON.stringify(database, null, 4);
    };
    try {
        /**
         * 使用同步方法
         */
        const fileData = fs_1.default.readFileSync(path_1.default.join('./server/data/data.json'), 'utf8');
        fs_1.default.writeFileSync(path_1.default.join('./server/data/data.json'), updateData(fileData), 'utf8');
        ctx.response.body = 'success';
    }
    catch (error) {
        ctx.response.body = 'error';
        console.log(error);
    }
};
exports.updateFileContent = updateFileContent;
