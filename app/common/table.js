class Table {
    list(ctx, next) {
        ctx.response.body = {
            code: 200,
            msg: 'success',
            data: {
                total: 22,
                list: [
                    { date: '2016-05-03', name: '王小虎', province: '上海', address: '上海市普陀区金沙江路 1518 弄' },
                    { date: '2016-05-03', name: '王小虎', province: '上海', address: '上海市普陀区金沙江路 1518 弄' },
                    { date: '2016-05-03', name: '王小虎', province: '上海', address: '上海市普陀区金沙江路 1518 弄' }
                ]
            }
        }

        return next()
    }
}

module.exports = new Table()

