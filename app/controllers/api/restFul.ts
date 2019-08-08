import { formatReturnData } from "../../utils/common";
/**
 * @des get方法
 * @param ctx 
 */
export function restGet(ctx: any) {
    ctx.response.body = formatReturnData({
        method: 'get'
    })
}

/**
 * @des post方法
 * @param ctx 
 */
export function restPost(ctx: any) {
    ctx.response.body = formatReturnData({
        method: 'post',
        bodyParams: ctx.request.body
    })
}

/**
 * @des put方法
 * @param ctx 
 */
export function restPut(ctx: any) {
    ctx.response.body = formatReturnData({
        method: 'put',
        bodyParams: ctx.request.body
    })
}