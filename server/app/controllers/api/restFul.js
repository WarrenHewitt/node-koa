"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restPut = exports.restPost = exports.restGet = void 0;
const common_1 = require("../../utils/common");
/**
 * @des get方法
 * @param ctx
 */
function restGet(ctx) {
    ctx.response.body = (0, common_1.formatReturnData)({
        method: 'get'
    });
}
exports.restGet = restGet;
/**
 * @des post方法
 * @param ctx
 */
function restPost(ctx) {
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
    ctx.response.body = (0, common_1.formatReturnData)({
        method: 'put',
        bodyParams: ctx.request.body
    });
}
exports.restPut = restPut;
