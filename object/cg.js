module.exports = function(router) {
    router.post('/my-node/login/', (ctx, next) => {
        ctx.cookies.set('token', '123456789aa')
        ctx.response.body = {
            "code": 0,
            "data": {
               username: '1222',
               token: '1333ddd1dd3adac3',
               code: ['001001']
            }
        }
    })

    router.get('/my-node/user-info/', (ctx, next) => {
        ctx.response.body = {
            "code": 0,
            "data": {
               username: '1222',
               roles: ['admin'],
               code: ['001', '001001', '001002']
            }
        }
    })

    router.get('/my-node/global-enum/', (ctx, next) => {
        ctx.response.body = {
            "code": 0,
            "data": {
               testSelect:  [{
                    key: 'a',
                    verbose: '下拉一'
                }, {
                    key: 'b',
                    verbose: '下拉2'
                }]
            }
        }
    })
}