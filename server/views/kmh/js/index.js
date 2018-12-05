
(function() {
    setTimeout(() => {
    
        // $('.loading').attr('style', 'display: none')
        // setLosePage();
        // roll()
        // setActivityOffline()
        // setDisplayPrizeNotice(1)
        // setEventListen()
        handleLoading(false)

        handleTransitionPage()

    }, 1000);

    function setEventListen() {
        $('#daOptions li').on('click', function(e) {
            console.log($(this).attr('data'))
        })

        /**
         * @desc 阻止loading遮罩被点击，传递事件
         */
        var loadingEle = document.getElementById('loading')
        loadingEle.addEventListener('click', function (e) { e.stopPropagation()}, false)
        loadingEle.addEventListener('touchmove', (e) => { e.preventDefault(); }, false)
    }

    /**
     * @param { Boolean } showOrHide true表示显示 loading
     * @param { Number } n 1表示显示白色背景，2表示背景透明 
     */
    function handleLoading(showOrHide, n) {
        if (showOrHide) {
            var bgc = n === 1 ? '#fff' : 'transparent'; 
            $('.loading').attr('style', 'background-color:' + bgc).show();
        } else {
            $('.loading').hide()
        }
    }

    function handleTransitionPage() {
        $('#transitionAction').show(0, function() {
            var context = this
            setTimeout(function () {
                $(context).fadeOut(1200)
            }, 2000)
        })
    }
    
    function setActivityOffline() {
        $('#main').html('<div class="activity-offline"><div><img src="./img/2.jpg" alt=" "></div><p >活动已经结束啦~</p></div>');
    }
    
    function setLosePage() {
        $('#main').html('<div id="losePage"><div><img src="./img/1.jpg" alt=" "></div><p>哎呀~ 页面走丢了</p><div><button onclick=reloadPage()>重新加载</button></div></div>')
    }
    
    /**
     * 
     * @param {Number} index 1 表示显示抢豪礼人数 2 表示抽奖结束
     * @param {Number} number 人数
     */
    function setDisplayPrizeNotice(index,number) {
        var number = number ? number : '0'
        var str1 = '<div class="d-p-people">已有'+ number +'人来抢豪礼了</div>'
        var str2 = '<div class="d-p-prize-end"><h2>抽奖已结束</h2><p>奖品领取详见活动说明，凯励程感恩有您！</p></div>'
    
        $('.d-p-notice').html(index === 1 ? str1 : str2)
    }
    
    function reloadPage() {
        window.location.reload()
        setTimeout(() => {
            var hrefStr = window.location.href;
            if (/\?time=/.test(hrefStr)) {
                window.location.href = window.location.href.replace(/\?time=.*/ig, '?time=' + Math.random());
            } else {
                window.location.href = window.location.href + '?time=' + Math.random();
            }
        }, 300);
    }
    
    function getWinPrizeData() {
        var htmlStr = '';
        for (var i = 0; i < 20; i++) {
            htmlStr += '<li id="i-' + i + '">' + 'this is ' + i + '</li>'
        }
    
        return htmlStr;
    }
    
    function roll() {
        var UL_HEIGHT = 100, SPEED = 50, LI_HEIGHT = 25;
    
        var ulObj = document.getElementById('roll');
        ulObj.innerHTML = getWinPrizeData();
    
        var height = ulObj.offsetHeight;
        var move = 0;
        var clearIn = '', mouseOut = true;
        
        function animationRoll() {
            clearIn = setInterval(function () {
                if(mouseOut){
                    move++;
                    ulObj.setAttribute('style', 'margin-top:-' + move + 'px');
                    if (move === LI_HEIGHT) {
                        move = 0;
                        ulObj.setAttribute('style', 'margin-top:-' + move + 'px');
                        var temp = ulObj.children[0];
                        ulObj.removeChild(temp)
                        ulObj.appendChild(temp)
                    }
                } else {
                    clearInterval(clearIn);
                }
            }, SPEED)
        }
    
        if (height > UL_HEIGHT) {
            animationRoll()
        } else {
            console.log(ulObj.offsetHeight);
        }
    }

    function setCountDown(ms) {
        var params = computeRestTime(ms)
        var htmlStr = params[0]+ '天' + params[1] + '时' + params[2] + '分' + params[3] + '秒';
        $('#countDown').html(htmlStr)
    }
    
    function computeRestTime(ms) {
        var second = Math.floor((ms / 1000) % 60),
            minute = Math.floor((ms / 60000) % 60),
            hour = Math.floor((ms / 3600000) % 24),
            day =  Math.floor(ms / 86400000);
        
        return [day, hour, minute, second, ms]
    }
    
    function timer(startTime, endTime, serverTime) {
        var initLocalTime = Date.now();
        timeNow = Date.now();
        serverTime = Date.now();
        startTime = new Date(2018, 11, 4, 17, 52, 0).getTime();
        endTime = new Date(2018, 11, 4, 17, 52, 10).getTime();

        var notExecuteHideCover = true

        if (startTime > serverTime) {
            $('.d-a-cover').show();
        }

        if (endTime > serverTime) {
            var intervalValue = setInterval(function () {
                timeNow =  Date.now()
                beforeEndMS = endTime - serverTime - timeNow + initLocalTime;
                
                if (notExecuteHideCover) {
                    beforeStartMS = startTime - serverTime - timeNow + initLocalTime;
                    setCountDown(beforeStartMS)
                    if (beforeStartMS < 0) {
                        notExecuteHideCover = false
                        $('.d-a-cover').hide();
                    }
                }

                console.log(beforeStartMS, beforeEndMS);

                if (beforeEndMS < 0) {
                    clearInterval(intervalValue);
                    setDisplayPrizeNotice(2)
                }

            }, 1000);
        }
    }
})()