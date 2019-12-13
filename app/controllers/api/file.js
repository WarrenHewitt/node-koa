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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
/**
 * @desc 文件处理相关操作
 */
var fs_1 = require("fs");
var path_1 = require("path");
/**
 * 格式化时间
 */
var dayjs_1 = require("dayjs");
/**
 * @desc 单页面路由实现
 */
function renderSPA(ctx, next) {
    /**
     * 路由中使用/:paramsName,可以用ctx.params.paramsName获取参数
     */
    ctx.response.type = 'html';
    ctx.response.body = fs_1["default"].createReadStream('./server/views/html/singlePageRoute.html');
    return next();
}
exports.renderSPA = renderSPA;
/**
 * @desc 根据获取的参数渲染 views/html 中的 html 文件
 */
function renderHtml(ctx, next) {
    var pages = ['indexedDB', 'a'];
    var name = ctx.params.htmlFileName;
    name = pages.indexOf(name) > -1 ? name : pages[0];
    ctx.response.type = 'html';
    ctx.response.body = fs_1["default"].createReadStream("./server/views/html/" + name + ".html");
    return next();
}
exports.renderHtml = renderHtml;
/**
 * @desc 保存通过base64 方式传过来的图片
 */
exports.upBase64 = function (ctx) {
    var data = ctx.request.body;
    var base64 = data.data;
    var buffer = new Buffer(base64, 'base64');
    fs_1["default"].writeFile("files/a.txt", buffer, function (err) {
        if (err)
            throw err;
        console.log('saved!');
    });
    ctx.body = 'ok';
};
/**
 * @desc 保存通过formData 方式传过来的图片
 */
exports.upFormData = function (ctx) {
    var data = ctx.request.body.files.data;
    var savePath = path_1["default"].join("./files", data.name);
    var reader = fs_1["default"].createReadStream(data.path);
    var writer = fs_1["default"].createWriteStream(savePath);
    console.log(reader.pipe(writer));
    ctx.body = 'http://localhost:1112/' + data.name;
};
/**
 * @desc 接收上传的excel等文件
 */
exports.uploadFile = function (ctx, next) {
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
/**
 * @desc 更新data/data.json文件中的数据
 */
exports.updateFileContent = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, company, product, change, updateData, fileData;
    return __generator(this, function (_b) {
        _a = ctx.request.body, company = _a.company, product = _a.product, change = _a.change;
        updateData = function (data) {
            var database = JSON.parse(data);
            var item = database[company][product];
            var oldTotal = item[item.length - 1] ? item[item.length - 1].total : 0;
            database[company][product].push({
                total: oldTotal + change,
                change: change,
                date: dayjs_1["default"](Date()).format('YYYY-MM-DD HH:mm:ss')
            });
            return JSON.stringify(database, null, 4);
        };
        try {
            fileData = fs_1["default"].readFileSync(path_1["default"].join('./server/data/data.json'), 'utf8');
            fs_1["default"].writeFileSync(path_1["default"].join('./server/data/data.json'), updateData(fileData), 'utf8');
            ctx.response.body = 'success';
        }
        catch (error) {
            ctx.response.body = 'error';
            console.log(error);
        }
        return [2 /*return*/];
    });
}); };
