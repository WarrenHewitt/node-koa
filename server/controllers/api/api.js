"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detail = exports.randomShare = exports.applyingList = exports.dynamic = exports.getRecord = exports.vList = void 0;
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
    ctx.response.body = formatReturnData({});
}
exports.vList = vList;
function getRecord(ctx, next) {
    const id = ctx.request.query.vehicleId;
    ctx.response.body = formatReturnData({});
    next();
}
exports.getRecord = getRecord;
function dynamic(ctx) {
    const id = ctx.request.query.page;
    let d = {};
    ctx.response.body = formatReturnData(d);
}
exports.dynamic = dynamic;
function applyingList(ctx) {
    const id = ctx.request.query.page;
    let d = {};
    if (id > 2) {
        d = { list: [] };
    }
    ctx.response.body = formatReturnData(d);
}
exports.applyingList = applyingList;
function randomShare(ctx) {
    const id = ctx.request.body;
    let a = [];
    if (id.ids && id.ids.length > 5) {
        a = [];
    }
    ctx.response.body = formatReturnData(a);
}
exports.randomShare = randomShare;
function detail(ctx) {
    // const id = ctx.params
    let a = {};
    ctx.response.body = formatReturnData(a);
}
exports.detail = detail;
//# sourceMappingURL=api.js.map