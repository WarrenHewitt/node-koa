module.exports = function(router) {
    router.get('/my-node/sd/userinfo/', (ctx, next) => {
        ctx.response.body = {
            "code": 0,
            "data": {
               name: '1222',
               phone: 1313132
            },
            "field_name": "string",
            "msg": "string"
        }
    })

    router.get('/my-node/sd/drive/trips/', (ctx, next) => {
        ctx.response.body = {
            "code": 0,
            "data": {
                totalCount: 6,
                list: [{
                    "id": 2,
                    "image_url": "/web_items/static/images/5.png",
                    "description": "甲居藏寨位于四川甘孜州丹巴县境内，距县城约8公里，是丹巴最具",
                    "tag": "1,2,3",
                    "startTime": "2018-05-11T02:36:28.897Z",
                    "endTime": "2018-05-20T02:36:28.897Z",
                    isMyTrip: true,
                    status: 1,
                    "place": "shisca",
                    "user_name": "先驱者",
                    "brand": "丰田",
                    "serial": "凯美瑞",
                    "startPlace": "天祥广场",
                    "lengthTime": 4,
                    "user_photo": "random_headphoto/1426.jpg",
                    "title": "川西自驾探寻佛国信仰：色达五明佛学院-丹巴-四姑娘山5日自驾游",
                    "skip_url": null
                },{
                    "id": 2,
                    "image_url": "/web_items/static/images/5.png",
                    "description": "甲居藏寨位于四川甘孜州丹巴县境内，距县城约8公里，是丹巴最具",
                    "tag": "1,2,3",
                    "startTime": "2018-05-11T02:36:28.897Z",
                    "endTime": "2018-05-20T02:36:28.897Z",
                    isMyTrip: true,
                    status: 1,
                    "place": "shisca",
                    "user_name": "先驱者",
                    "brand": "丰田",
                    "serial": "凯美瑞",
                    "startPlace": "天祥广场",
                    "lengthTime": 4,
                    "user_photo": "random_headphoto/1426.jpg",
                    "title": "川西自驾探寻佛国信仰：色达五明佛学院-丹巴-四姑娘山5日自驾游",
                    "skip_url": null
                },{
                    "id": 2,
                    "image_url": "/web_items/static/images/5.png",
                    "description": "甲居藏寨位于四川甘孜州丹巴县境内，距县城约8公里，是丹巴最具",
                    "tag": "1,2,3",
                    "startTime": "2018-05-11T02:36:28.897Z",
                    "endTime": "2018-05-20T02:36:28.897Z",
                    isMyTrip: true,
                    status: 1,
                    "place": "shisca",
                    "user_name": "先驱者",
                    "brand": "丰田",
                    "serial": "凯美瑞",
                    "startPlace": "天祥广场",
                    "lengthTime": 4,
                    "user_photo": "random_headphoto/1426.jpg",
                    "title": "川西自驾探寻佛国信仰：色达五明佛学院-丹巴-四姑娘山5日自驾游",
                    "skip_url": null
                }]
            },
            "field_name": "string",
            "msg": "string"
        }
    })

    router.get('/my-node/sd/drive/reservations/', (ctx, next) => {
        ctx.response.body = {
            "code": 0,
            "data": {
                totalCount: 6,
                list: [{
                    "image_url": "/web_items/static/images/5.png",
                    "adultSum": 2,
                    "childrenSum": 3,
                    "contacts": "hewei",
                    "departureDate": 0,
                    "number": "kloo0000oo",
                    "payMoney": 233,
                    "phone": "18285655896",
                    "refundMoney": 0,
                    "reserveTime": "2018-05-01T03:25:57.957Z",
                    "rules": "string",
                    "startTime": "2018-05-01T03:25:57.957Z",
                    "status": 2,
                    "title": "string"
                },{
                    "image_url": "/web_items/static/images/5.png",
                    "adultSum": 2,
                    "childrenSum": 3,
                    "contacts": "hewei",
                    "departureDate": 0,
                    "number": "kloo0000oo",
                    "payMoney": 233,
                    "phone": "18285655896",
                    "refundMoney": 0,
                    "reserveTime": "2018-05-01T03:25:57.957Z",
                    "rules": "string",
                    "startTime": "2018-05-01T03:25:57.957Z",
                    "status": 1,
                    "title": "string"
                }]
            },
            "field_name": "string",
            "msg": "string"
        }
    })

    router.get('/my-node/sd/drive/dynamic/', (ctx, next) => {
        ctx.response.body = {
            "code": 0,
            "data": {
                totalCount: 6,
                list: [{
                    "id": 2,
                    "image_url": ['/web_items/static/images/5.png'],
                    "description": "信仰：色达五明佛学院-信仰：色达五明佛学院-信仰：色达五明佛学院-信仰：色达五明佛学院-",
                    "tag": [1,2,3],
                    "time": "2018-05-08 12:53:48",
                    "place": "四川",
                    "user_name": "先驱者",
                    "brand": "丰田",
                    "serial": "凯美瑞",
                    "user_photo": "/web_items/static/images/5.png",
                    "title": "川西自驾探寻佛国信仰：色达五明佛学院-丹巴-四姑娘山5日自驾游",
                    "skip_url": null
                },{
                    "id": 2,
                    "image_url": ['/web_items/static/images/2.jpg','/web_items/static/images/5.png',  '/web_items/static/images/2.jpg'],
                    "description": "信仰：色达五明佛学院-信仰：色达五明佛学院-信仰：色达五明佛学院-信仰：色达五明佛学院-",
                    "tag": [1,2,3],
                    "time": "2018-05-08 12:53:48",
                    "place": "四川",
                    "user_name": "先驱者",
                    "brand": "丰田",
                    "serial": "凯美瑞",
                    "user_photo": "/web_items/static/images/5.png",
                    "title": "川西自驾探寻佛国信仰：色达五明佛学院-丹巴-四姑娘山5日自驾游",
                    "skip_url": null
                },{
                    "id": 2,
                    "image_url": ['/web_items/static/images/2.jpg','/web_items/static/images/5.png',  '/web_items/static/images/2.jpg'],
                    "description": "信仰：色达五明佛学院-信仰：色达五明佛学院-信仰：色达五明佛学院-信仰：色达五明佛学院-",
                    "tag": [1,2,3],
                    "time": "2018-05-08 12:53:48",
                    "place": "四川",
                    "user_name": "先驱者",
                    "brand": "丰田",
                    "serial": "凯美瑞",
                    "user_photo": "/web_items/static/images/5.png",
                    "title": "川西自驾探寻佛国信仰：色达五明佛学院-丹巴-四姑娘山5日自驾游",
                    "skip_url": null
                }]
            },
            "field_name": "string",
            "msg": "string"
        }
    })

    router.get('/my-node/sd/drive/tripDetails/', (ctx, next) => {
        ctx.response.body = {
            "code": 0,
            "data": {
                "image_url": '/web_items/static/images/5.png',
                adult_sum: 15,
                children_sum: 10,
                is_my_trip: false,
                status: 1,
                start_time: '2018-05-12T09:37:53.851Z',
                name:'',
                adult_deposit: 233,
                children_deposit: 55,
                title: "这是标题标题",
                details:'<p>这是内容</p><p>这是内容</p><p>这是内容</p><p>这是内容</p><p>这是内容</p><p>这是内容</p><p>这是内容</p>'
            },
            "field_name": "string",
            "msg": "string"
        }
    })
    
    router.get('/my-node/sd/drive/tagList/', (ctx, next) => {
        ctx.response.body = {
            "code": 0,
            "data": {
               "1": 1,
            
               "3": 15
            },
            "field_name": "string",
            "msg": "string"
        }
    })

    router.get('/my-node/sd/drive/reservationDetails/', (ctx, next) => {
        ctx.response.body = {
            "code": 0,
            "data": {
                id: 123,
                "image_url": "/web_items/static/images/5.png",
                adult_deposit: 100,
                children_deposit: 300,
                "adultSum": 2,
                "childrenSum": 3,
                "contacts": "hewei",
                "departureDate": 0,
                "number": "kloo0000oo",
                "payMoney": 233,
                "phone": "18285655896",
                "refundMoney": 4645,
                "reserveTime": "2018-05-01T03:25:57.957Z",
                "rules": "string",
                "startTime": "2018-05-01T03:25:57.957Z",
                "status": 1,
                "title": "string"
            },
            "msg": "查询成功"
        }
    })

    router.post('/my-node/sd/drive/refund/', (ctx, next) => {
        ctx.response.body = {
            "code": 0,
            "data": {
            },
            "msg": "查询成功"
        }
    })

    router.post('/my-node/sd/drive/pay/charge/', (ctx, next) => {
        ctx.response.body = {
            "code": 0,
            "data": {
            },
            "msg": "查询成功"
        }
    })
}