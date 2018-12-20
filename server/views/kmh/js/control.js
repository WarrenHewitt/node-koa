var control = {
    beforeActivityStart: function() {
        $('.d-a-count-down').show()
    },

    activityStart: function(){
        $('.d-a-count-down').hide()
        $('#drawPrizePart').show()

        REQ_API.getPV(function(res){
            if(res > 100) {
                tools.setDisplayPrizeNotice(1, tools.toThousands(res))
            }
        })
    },

    activityEnd: function() {
        tools.setDisplayPrizeNotice(2)
        $('#openWeChatService, .check-my-prize').hide()
    },
    
    roundTwoOffline: function(data) {
        if(data.round == 2) {
            var st = new Date(data.current_time).getTime()
            var ant = new Date(data.activity_info.act_end_time).getTime()
            if (st >= ant) {
                $('body').html('<div class="activity-offline"><div><p >活动已经结束啦~</p></div></div>');
            }
        }
    },

    checkBindWeChat: function(){
        REQ_API.weChatInfo(function(res){
            if(res.nickname) {
                window.gsInfo.wxNickname = res.nickname
                window.gsInfo.wxAvatar = res.avatar_uri
                window.gsInfo.wxFocused = true
            }
        })
    },

    // data为点击抽奖后返回的奖品信息
    handleWinPriseInfo: function(data) {
        function setHtml(res) {
            var prizeDict = ['iPhone', 'cleaner', 'bbq', 'jdcard', 'redpacket']
            var i = -1;
            if(res.prize_type == 1){
                i = res.id / 2 - 1;
            } else {
                i = 4;
            }
            var htmlStr = '<div><img id="winPImg" src="./img/popup/'+ prizeDict[i] +'.png" alt="no"></div><p>恭喜您！抽中“'+res.prize_description+'”</p>'
            $('.draw-prize,.d-a-count-down').hide()
            $('#winPrise').html(htmlStr).show()
        }

        if(data) {
            setHtml(data)
        } else {
            REQ_API.winPrizeInfo(function(res) {
                if (res) {
                    setHtml(res)
                }
            })
        }
    },

    winPriseList: function() {
        REQ_API.winnerList(function(res) {
            // ' <li><div>134****1344</div><div>科沃斯扫地拖地一体机器人1台</div></li>'
            // $()
        })
    },

    // 两次确认，检测是否有资格 ？？？？？？ 还是接口报错
    initGetBasicInfo: function() {
        var context = this
        REQ_API.basicInfo(function(res) {
            if(res) {
                context.roundTwoOffline(res)

                if (res.qualified) {
                    var ai = res.activity_info

                    // 活动的开始与结束统一在timer中判断
                    tools.timer(ai.raffle_start_time, ai.raffle_end_time, res.current_time)
                    $('#chanceCount').html(1)
                    $('.check-my-prize').show()
                } else {
                    context.handleWinPriseInfo()
                }
            }
        })
        
    },

    handleGetPrize: function () {
        var context = this
        REQ_API.lottery(function (res) {
            $('#chanceCount').html(0)
            context.handleWinPriseInfo({
                id:res.id,
                prize_type: res.prize_type,
                prize_description: res.prize_description
            })

            // 开启弹窗
            getPrize({
                id: res.id,
                prizeType: res.prize_type,
                type: res.prize_type,
                awards: res.prize_awards,
                description: res.prize_description,
                otherBenefits: 2
            })
        })
    },

    controlMain: function() {
        tools.handleLoading()
        tools.handleTransitionPage()
        this.checkBindWeChat()
        this.initGetBasicInfo()
    }
}