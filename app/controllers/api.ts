export function getNames(ctx: any) {
    console.log(ctx.request.query);
    ctx.response.body = ['a', 'b', 'c']
}

export function getTableList(ctx: any, next: Function) {
    ctx.response.body = {
        code: 1,
        data: [{
            date: '2016-05-03',
            name: '王小虎33333',
            province: '上海',
            address: '上海市普陀区金沙江路 1518 弄'
        }],
        msg: '成功'
    }

    next()
}