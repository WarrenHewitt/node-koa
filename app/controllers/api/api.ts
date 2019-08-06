/**
 * FOR WORK
 */
function formatReturnData(data: Object) {
    return {
        "code": 0,
        "data": data,
        "msg": "查询成功"
    }
}

export function vList(ctx: any) {
    ctx.response.body = formatReturnData([
       
    ])
}

export function getRecord(ctx: any, next: Function) {
    const id = ctx.request.query.vehicleId
    ctx.response.body = formatReturnData([])

    next()
}