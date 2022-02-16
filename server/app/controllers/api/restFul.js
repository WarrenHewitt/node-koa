"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restPut = exports.restPost = exports.restGet = void 0;
const common_1 = require("../../utils/common");
/**
 * @des get方法
 * @param ctx
 */
function restGet(ctx) {
    // 获取参数采用 ctx.query 或 ctx.request.query 
    console.log('get queryString', ctx.query);
    ctx.response.body = (0, common_1.formatReturnData)({
        method: 'get',
        params: ctx.request.query
    });
}
exports.restGet = restGet;
/**
 * @des post方法
 * @param ctx
 */
function restPost(ctx) {
    console.log('post body', ctx.request.body); // 注意要 application/json 格式请求数据
    console.log('post body query', ctx.request.query); // 同时获取 queryString
    ctx.response.body = (0, common_1.formatReturnData)({
        method: 'post',
        bodyParams: ctx.request.body
    });
}
exports.restPost = restPost;
/**
 * @des put方法
 * @param ctx
 */
function restPut(ctx) {
    /* 用法同上 post */
    console.log('put body', ctx.request.body);
    ctx.response.body = (0, common_1.formatReturnData)({
        method: 'put',
        bodyParams: ctx.request.body
    });
}
exports.restPut = restPut;
