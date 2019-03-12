exports.api = (router) => {
    router.get('/jv/gasoline/details/', (ctx) => {
        ctx.response.body = {
            "code": 0,
            "data": {
                results: [
                    { "amount": 15101, "name": "开通微信服务1", "create_time": "2019-01-31T08:21:46Z" },
                    { "amount": 0, "name": "开通微信服务1", "create_time": "2019-01-31T08:21:46Z" },
                    { "amount": -123, "name": "开通微信服务1", "create_time": "2019-01-31T08:21:46Z" },
                ],
            },
            "msg": "请求成功"
        };
    });
};
//# sourceMappingURL=api.js.map