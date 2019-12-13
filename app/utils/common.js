"use strict";
exports.__esModule = true;
/**
 * 格式化请求返回值
 * @param data
 * @param code
 * @param msg
 */
exports.formatReturnData = function (data, code, msg) {
    if (code === void 0) { code = 200; }
    if (msg === void 0) { msg = 'success'; }
    return {
        'code': code,
        'results': data,
        'msg': msg
    };
};
