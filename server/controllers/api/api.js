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
    ctx.response.body = formatReturnData([{
            "id": 43,
            "title": "Xtest111111",
            "start_time": "2018-08-15 00:00:00",
            "end_time": "2018-08-20 00:00:00",
            "length_time": "1天",
            "start_place": "成都",
            "thumbnail_url": "http://img4.imgtn.bdimg.com/it/u=2153937626,1074119156&fm=26&gp=0.jpg",
            "status": 1,
            "skip_url": "http://img4.imgtn.bdimg.com/it/u=2153937626,1074119156&fm=26&gp=0.jpg",
            "reservations": [{
                    "id": 133,
                    "number": "KLC201808090001",
                    "contacts": "雷地",
                    "phone": "18228744968",
                    "status": 1,
                    "rules": null,
                    "reserve_time": "2018-08-09 10:32:05",
                    "adult_sum": 1,
                    "children_sum": 1,
                    "pay_money": 190,
                    "departure_date": 13,
                    "refund_percent": 30,
                    "refund_money": 57
                }]
        }]);
}
exports.vList = vList;
function getRecord(ctx, next) {
    const id = ctx.request.query.vehicleId;
    ctx.response.body = formatReturnData({
        "id": 14,
        "title": "最终版测试",
        details: '<p><img src="http://file.at.klicen.com/api/file/5bbff9aa3bef2b000a620f7d/" style="max-width:100%;" data-from="Klicen"><img src="http://file.at.klicen.com/api/file/5bbff9aa3bef2b000a620f7e/" data-from="Klicen" style="max-width: 100%;"><br></p><p>撒大声地啊实打实大萨达ad阿达阿萨德按时打算大沙地阿萨德是多少啊</p>',
        "status": 2,
        "start_time": "2018-08-16 00:00:00",
        "end_time": "2018-08-30 00:00:00",
        "length_time": "2天",
        "start_place": "啊啊啊",
        "enroll_url": "444444444444444",
        "is_my_trip": true,
        "image_url": "http://img4.imgtn.bdimg.com/it/u=2153937626,1074119156&fm=26&gp=0.jpg",
        "summary": "哈哈哈哈哈1",
        "thumbnail_url": "sdadasdasdas",
        "skip_url": "http://img4.imgtn.bdimg.com/it/u=2153937626,1074119156&fm=26&gp=0.jpg"
    });
    next();
}
exports.getRecord = getRecord;
function dynamic(ctx, next) {
    const id = ctx.request.query.vehicleId;
    ctx.response.body = formatReturnData({ "total_count": 1,
        "dynamic_show_vo": [
            {
                "id": 173,
                "description": "cacascascsacas",
                "tag": [
                    "美景",
                    "人文"
                ],
                "time": "2019-04-04 00:00:00",
                "place": "成都",
                "brand": "福特",
                "serial": "蒙迪欧",
                "title": "萨达实打实多",
                "image_url": [
                    "http://img4.imgtn.bdimg.com/it/u=2153937626,1074119156&fm=26&gp=0.jpg"
                ],
                "user_name": "就爱吃鱼头",
                "user_photo": "http://img4.imgtn.bdimg.com/it/u=2153937626,1074119156&fm=26&gp=0.jpg",
                "skip_url": "http://img4.imgtn.bdimg.com/it/u=2153937626,1074119156&fm=26&gp=0.jpg",
                "style": null
            },
            {
                "id": 1743,
                "description": "cacascascsacas",
                "tag": [
                    "美景",
                    "人文"
                ],
                "time": "2019-04-04 00:00:00",
                "place": "成都",
                "brand": "福特",
                "serial": "蒙迪欧",
                "title": "萨达实打实多",
                "image_url": [
                    "http://img4.imgtn.bdimg.com/it/u=2153937626,1074119156&fm=26&gp=0.jpg"
                ],
                "user_name": "就爱吃鱼头",
                "user_photo": "http://img4.imgtn.bdimg.com/it/u=2153937626,1074119156&fm=26&gp=0.jpg",
                "skip_url": "http://img4.imgtn.bdimg.com/it/u=2153937626,1074119156&fm=26&gp=0.jpg",
                "style": null
            },
            {
                "id": 1734,
                "description": "cacascascsacas",
                "tag": [
                    "美景",
                    "人文"
                ],
                "time": "2019-04-04 00:00:00",
                "place": "成都",
                "brand": "福特",
                "serial": "蒙迪欧",
                "title": "萨达实打实多",
                "image_url": [
                    "http://img4.imgtn.bdimg.com/it/u=2153937626,1074119156&fm=26&gp=0.jpg"
                ],
                "user_name": "就爱吃鱼头",
                "user_photo": "http://img4.imgtn.bdimg.com/it/u=2153937626,1074119156&fm=26&gp=0.jpg",
                "skip_url": "http://img4.imgtn.bdimg.com/it/u=2153937626,1074119156&fm=26&gp=0.jpg",
                "style": null
            }
        ]
    });
    next();
}
exports.dynamic = dynamic;
function tagList(ctx) {
    const id = ctx.request.query.vehicleId;
    ctx.response.body = formatReturnData({
        "人文": 1,
        "美景": 1
    });
}
exports.tagList = tagList;
//# sourceMappingURL=api.js.map