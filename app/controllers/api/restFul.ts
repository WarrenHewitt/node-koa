import { formatReturnData } from "../../utils/common";
/**
 * @des get方法
 * @param ctx 
 */
export function restGet(ctx: any) {
    // 获取参数采用 ctx.query 或 ctx.request.query 
    console.log('get queryString', ctx.query);
    ctx.response.body = formatReturnData({
        method: 'get',
        params: ctx.request.query
    })
}


/**
 * @des post方法
 * @param ctx 
 */
export function restPost(ctx: any) {
    console.log('post body',  ctx.request.body); // 注意要 application/json 格式请求数据
    console.log('post body query',  ctx.request.query); // 同时获取 queryString
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
    /* 用法同上 post */
    console.log('put body',  ctx.request.body);
    ctx.response.body = formatReturnData({
        method: 'put',
        bodyParams: ctx.request.body
    })
}