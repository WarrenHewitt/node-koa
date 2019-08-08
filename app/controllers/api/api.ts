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
    ctx.response.body = formatReturnData({});
}

export function getRecord(ctx: any, next: Function) {
    const id = ctx.request.query.vehicleId
    ctx.response.body = formatReturnData({
      
    })

    next()
}

export function dynamic(ctx: any) {
    const id = ctx.request.query.page
    let d = {}
    ctx.response.body = formatReturnData(d)

}

export function applyingList(ctx: any) {
    const id = ctx.request.query.page
    let d = { 
      }

    if(id>2){
      d = {list: []}
    }
    ctx.response.body = formatReturnData(d)
}

export function randomShare(ctx: any) {
    const id = ctx.request.body
    let a:any =  []
    if(id.ids && id.ids.length>5){
      a = []
    }
    ctx.response.body = formatReturnData(a)
}
export function detail(ctx: any) {
    // const id = ctx.params
    let a = 
      {
       

      }
    ctx.response.body = formatReturnData(a)
}