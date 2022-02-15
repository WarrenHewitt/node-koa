"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatReturnData = void 0;
/**
 * 格式化请求返回值
 * @param data
 * @param code
 * @param msg
 */
const formatReturnData = function (data, code = 200, msg = 'success') {
    return {
        'code': code,
        'results': data,
        'msg': msg
    };
};
exports.formatReturnData = formatReturnData;
