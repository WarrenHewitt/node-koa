/**
 * 格式化请求返回值
 * @param data 
 * @param code 
 * @param msg 
 */
export const formatReturnData = function(data: any, code=200, msg='success') {
    return {
        'code': code,
        'results': data,
        'msg': msg
    }
}