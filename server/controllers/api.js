"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNames(ctx) {
    // console.log(ctx.request.query);
    ctx.response.body = ['a', 'b', 'c'];
}
exports.getNames = getNames;
function getTableList(ctx, next) {
    ctx.response.body = {
        code: 1,
        data: [{
                date: '2016-05-03',
                name: '王小虎33333',
                province: '上海',
                address: '上海市普陀区金沙江路 1518 弄'
            }],
        msg: '成功'
    };
    next();
}
exports.getTableList = getTableList;
//# sourceMappingURL=api.js.map