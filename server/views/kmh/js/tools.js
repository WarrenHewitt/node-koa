var tools = {
    /**
     * @param msg  消息内容
     * @param duration  时长
     * @constructor
     */
    toast: function(msg,duration) {
        duration=isNaN(duration)?3000:duration;
        var m = document.createElement('div');
        m.innerHTML = msg;
        m.style.cssText="width: 60%;min-width: 150px;opacity: 0.7;height: 30px;color: rgb(255, 255, 255);line-height: 30px;text-align: center;border-radius: 5px;position: fixed;top: 70%;left: 20%;z-index: 999999;background: rgb(0, 0, 0);font-size: 12px;";
        document.body.appendChild(m);
        setTimeout(function() {
            var d = 0.5;
            m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
            m.style.opacity = '0';
            setTimeout(function() { document.body.removeChild(m) }, d * 1000);
        }, duration);
    },

    toThousands: function(num) {
        var num = (num || 0).toString(), result = '';
        while (num.length > 3) {
            result = ',' + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }
        if (num) { result = num + result; }
        return result;
    },
    
    /**
     * @param { Boolean } showOrHide true表示显示 loading
     * @param { Boolean } n true表示显示白色背景，false表示背景透明 
     */
    handleLoading: function(showOrHide, n) {
        if (showOrHide) {
            var bgc = n ? '#fff' : 'transparent'; 
            $('.loading').attr('style', 'background-color:' + bgc).show();
        } else {
            $('.loading').hide()
        }
    },

    /**
     * @desc 操作过渡页面
     */
    handleTransitionPage: function() {
        $('#transitionAction').show(0, function() {
            var context = this
            $('.cloud').animate({ opacity: 1, bottom: '24.8%'}, {duration: 'slow',easing: 'ease-in-out', complete: function() {
                $('.door').animate({opacity: 1},{duration: 'slow'})
            }})
            setTimeout(function () {
                $(context).fadeOut(1000)
            }, 200)
        })
    },

    /**
     * 
     * @param {Number} index 1 表示显示抢豪礼人数 2 表示抽奖结束
     * @param {Number} number 人数
     */
    setDisplayPrizeNotice: function(index,number) {
        var str1 = '<div class="d-p-people">已有'+ number +'人来抢豪礼啦</div>'
        var str2 = '<div class="d-p-prize-end"><h2>抽奖已结束</h2><p>奖品领取详见活动说明，凯励程感恩有您！</p></div>'
    
        $('.d-p-notice').html(index === 1 ? str1 : str2)
    },

    setLosePage: function() {
        var str = '<div class="lose-content"><div class="img-box"><img src="./img/request-error.png" alt="no"></div><p>哎呀～页面走丢了</p><button id="errorBtn">重新加载</button></div>'
        $('#main').html(str)
    },

    /**
     * @desc 处理倒计时
     */
    timer: function(startTime, endTime, serverTime) {
        function setCountDown(ms) {
            function reStyle (n) {
                var top = [0, 40, 78, 118, 158, 198, 238, 278, 318, 358]
                return '<span><em style="background-position-y: -' + top[n[0]] + 'px;"></em></span><span><em style="background-position-y: -' + top[n[1]] + 'px;"></em></span>'
            }
            var par = computeRestTime(ms)
            var dayStr = reStyle(par[0]) + '<b class="b1"></b>';
            var htmlStr = (par[0][1] == 0 && par[0][0] == 0) ? '' : dayStr ;
                htmlStr +=  reStyle(par[1]) + '<b class="b2"></b>'+
                            reStyle(par[2]) + '<b class="b3"></b>'+
                            reStyle(par[3]) + '<b class="b4"></b>';
            $('#countDown').html(htmlStr)
        }
        
        function computeRestTime(ms) {
            function prefix(params) {
                params = params.toString();
                return params > 9 ? [Math.floor((params / 10)), Math.floor((params % 10))] : [0, params]
            }
            var second = Math.floor((ms / 1000) % 60),
                minute = Math.floor((ms / 60000) % 60),
                hour = Math.floor((ms / 3600000) % 24),
                day =  Math.floor(ms / 86400000);
            
            day = prefix(day)
            hour = prefix(hour)
            minute = prefix(minute)
            second = prefix(second)
            return [day, hour, minute, second, ms]
        }
        
        var initLocalTime = Date.now();
        serverTime = new Date(serverTime).getTime();
        startTime = new Date(startTime).getTime();
        endTime = new Date(endTime).getTime();

        var activityNotStart = true
        
        // 判断是否显示倒计时
        if (serverTime < startTime) {
            control.beforeActivityStart()
        }
        
        // 计时(进入时活动正在进行中同样计时，确保活动结束时能检测到)
        if (endTime > serverTime) {
            var intervalValue = setInterval(function () {
                timeNow =  Date.now()
                beforeEndMS = endTime - serverTime - timeNow + initLocalTime;
                
                if (activityNotStart) {
                    beforeStartMS = startTime - serverTime - timeNow + initLocalTime;
                    setCountDown(beforeStartMS)

                    // 判断活动开始
                    if (beforeStartMS < 0) {
                        activityNotStart = false
                        control.activityStart()
                    }
                }
                
                // 判断抽奖是否在倒计时的过程中结束
                if (beforeEndMS < 0) {
                    clearInterval(intervalValue);
                    control.activityEnd()
                }

            }, 1000);
        } else {
            control.activityEnd()
        }
    }
}