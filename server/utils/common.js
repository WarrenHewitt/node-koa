"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 格式化请求返回值
 * @param data
 * @param code
 * @param msg
 */
exports.formatReturnData = function (data, code = 200, msg = 'success') {
    return {
        'code': code,
        'results': data,
        'msg': msg
    };
};
//# sourceMappingURL=common.js.map