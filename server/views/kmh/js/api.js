var REQ_API = {
    ajaxFn: function(config) {
        var baseUrl = '';
        var HOSTNAME = window.location.hostname;
        if (HOSTNAME === '127.0.0.1' || HOSTNAME === 'localhost') {
            baseUrl = 'http://localhost:2500/api';
        }
    
        var tempObj = {
            type: config.method || 'GET',
            url: baseUrl + config.url,
            success: function(res){
                if(res.code == 0) {
                    config.success(res.data);
                } else {
                    if(config.check) {
                        tools.setLosePage()
                    }
                }
            },
            error: function (err) {
                console.log('error: ', err);
                if(config.check) {
                    tools.setLosePage()
                }
                if(config.error) config.error(err)
            }
        };
    
        if (config.method !== 'GET') {
            tempObj.data = config.data;
        }
    
        $.ajax(tempObj);
    },

    lottery: function(success){
        success({
            "id": 2,
            "user_id": 200,
            "activity_id": 2,
            "activity_round": 1,
            "prize_id": 2,
            "prize_awards": "一等奖",
            "prize_description": "iPhone xs 1 台",
            "prize_other_benefits": 1,
            "prize_type": 1,
            "prize_image_url": "www.baidu.com",
            "prize_amount": null,
            "has_other_benefits": 1,
            "has_offer_prize": 1
        })
    },
    
    weChatInfo: function (success) {
        this.ajaxFn({
            url:'/weixin/gzhbind/info/',
            success: callback
        })

        success({
            "avatar_uri":"http://wx.qlogo.cn",
            "nickname":"樺羽"
        })
    },

    getPV: function(success) {
        success(1520)
    },

    basicInfo: function(success) {
        success({
            "phone": "13762362634",
            "area": {
                "storeId": null,
                "zoneId": 100016,
                "warZone": "服务中心"
            },
            round: 2,
            "qualified": true,
            "current_time": "2019-01-08T16:00:00Z",
            "activity_info": {
                "id": 1,
                "act_start_time": "2018-11-30T16:00:00Z",
                "act_end_time": "2019-02-03T15:59:59Z",
                "raffle_start_time": "2019-01-08T16:00:00Z",
                "raffle_end_time": "2019-01-08T16:10:05Z"
            }
        })
    },

    winnerList: function(success) {
        success([
            {phone: '132****5689', prise: '500元凯励程自驾游代金券2张'},
            {phone: '132****5689', prise: '500元凯励程代金券2张'},
            {phone: '132****5689', prise: '500元凯励程自驾游代金券2张'},
            {phone: '132****5689', prise: '500元凯励程自驾游代金券2张'},
            {phone: '132****5689', prise: '50代金券2张'},
            {phone: '132****5689', prise: '500元凯励程自驾游代金券2张'},
            {phone: '132****5119', prise: '500元凯励程自驾'},
        ])
    },

    winPrizeInfo: function(success) {
        this.ajaxFn({
            check: true,
            url:'/weixin/gzhbind/info/',
            success: callback
        })
        success(
            {
            "id": 2,
            "user_id": 200,
            "activity_id": 2,
            "activity_round": 1,
            "prize_id": 2,
            "prize_awards": "一等奖",
            "prize_description": "90iPhone xs 1 台",
            "prize_other_benefits": 1,
            "prize_type": 1,
            "prize_image_url": "www.baidu.com",
            "prize_amount": null,
            "has_other_benefits": 1,
            "has_offer_prize": 1
        }
        )
    }
}
