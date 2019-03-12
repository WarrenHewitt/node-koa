"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatReturnData(data) {
    return {
        "code": 0,
        "data": data,
        "msg": "查询成功"
    };
}
function vList(ctx) {
    ctx.response.body = formatReturnData([
        {
            "id": 1,
            "phone": "18720086409",
            "nickname": "周长青",
            "plateNumber": "川A88888",
            "vin": "LSVAU033062297649",
            "vehicleId": 10,
            "brandName": "奥迪",
            "serialName": "A6",
            "model": "2006款1.8手动",
            "mileage": 100,
            "serviceStartTime": "2017-01-01 00:00:00",
            "serviceEndTime": "2020-01-01 00:00:00",
            "serviceStatus": null
        }
    ]);
}
exports.vList = vList;
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