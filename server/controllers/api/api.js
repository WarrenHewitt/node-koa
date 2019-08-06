"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * FOR WORK
 */
function formatReturnData(data) {
    return {
        "code": 0,
        "data": data,
        "msg": "查询成功"
    };
}
function vList(ctx) {
    ctx.response.body = formatReturnData([]);
}
exports.vList = vList;
function getRecord(ctx, next) {
    const id = ctx.request.query.vehicleId;
    ctx.response.body = formatReturnData([]);
    next();
}
exports.getRecord = getRecord;
//# sourceMappingURL=api.js.map