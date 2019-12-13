"use strict";
exports.__esModule = true;
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
    var id = ctx.request.query.vehicleId;
    ctx.response.body = formatReturnData({});
    next();
}
exports.getRecord = getRecord;
function dynamic(ctx) {
    var id = ctx.request.query.page;
    var d = {};
    ctx.response.body = formatReturnData(d);
}
exports.dynamic = dynamic;
function applyingList(ctx) {
    var id = ctx.request.query.page;
    var d = {};
    if (id > 2) {
        d = { list: [] };
    }
    ctx.response.body = formatReturnData(d);
}
exports.applyingList = applyingList;
function randomShare(ctx) {
    var id = ctx.request.body;
    var a = [];
    if (id.ids && id.ids.length > 5) {
        a = [];
    }
    ctx.response.body = formatReturnData(a);
}
exports.randomShare = randomShare;
function detail(ctx) {
    // const id = ctx.params
    var a = {};
    ctx.response.body = formatReturnData(a);
}
exports.detail = detail;
