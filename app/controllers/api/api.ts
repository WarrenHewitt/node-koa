function formatReturnData(data: Object) {
    return {
        "code": 0,
        "data": data,
        "msg": "查询成功"
    }
}


export function vList(ctx: any) {
    ctx.response.body = formatReturnData([
        {
            "id":1,
            "phone":"18720086409",
            "nickname":"周长青",
            "plateNumber":"川A88888",
            "vin":"LSVAU033062297649",
            "vehicleId":10,
            "brandName":"奥迪",
            "serialName":"A6",
            "model":"2006款1.8手动",
            "mileage":100,
            "serviceStartTime":"2017-01-01 00:00:00",
            "serviceEndTime":"2020-01-01 00:00:00",
            "serviceStatus":null
        },
        {
            "id":2,
            "phone":"18720086409",
            "nickname":"周长青222",
            "plateNumber":"川A88888",
            "vin":"LSVAU033062297649",
            "vehicleId":10,
            "brandName":"奥迪",
            "serialName":"A6",
            "model":"2006款1.8手动",
            "mileage":100,
            "serviceStartTime":"2017-01-01 00:00:00",
            "serviceEndTime":"2020-01-01 00:00:00",
            "serviceStatus":null
        }
    ])
}

export function getRecord(ctx: any, next: Function) {
    const id = ctx.request.query.vehicleId
    ctx.response.body = formatReturnData([
        { "username": id, "nickname":"李志", "operationContent":"修改里程为 342km", "createTime":"2019-03-08 17:17:00" },
        { "username":"KLC0051", "nickname":"李志", "operationContent":"修改里程为 342km", "createTime":"2019-03-08 17:17:00" },
        { "username":"KLC0051", "nickname":"李志", "operationContent":"修改里程为 342km", "createTime":"2019-03-08 17:17:00" },
        { "username":"KLC0051", "nickname":"李志", "operationContent":"修改里程为 342km", "createTime":"2019-03-08 17:17:00" },
        { "username":"KLC0051", "nickname":"李志", "operationContent":"修改里程为 342km", "createTime":"2019-03-08 17:17:00" },
        { "username":"KLC0051", "nickname":"李志", "operationContent":"修改里程为 342km", "createTime":"2019-03-08 17:17:00" },
        { "username":"KLC0051", "nickname":"李志", "operationContent":"修改里程为 342km", "createTime":"2019-03-08 17:17:00" },
        { "username":"KLC0051", "nickname":"李志", "operationContent":"修改里程为 342km", "createTime":"2019-03-08 17:17:00" },
        { "username":"KLC0051", "nickname":"李志", "operationContent":"修改里程为 342km", "createTime":"2019-03-08 17:17:00" },
        { "username":"KLC0051", "nickname":"李志", "operationContent":"修改里程为 342km", "createTime":"2019-03-08 17:17:00" },
        { "username":"KLC0051", "nickname":"李志", "operationContent":"修改里程为 342km", "createTime":"2019-03-08 17:17:00" },
        { "username":"KLC0051", "nickname":"李志1", "operationContent":"修改里程为 342k1m", "createTime":"2019-03-08 117:17:00" },
    ])

    next()
}