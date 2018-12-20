
(function() {
    function setEventListen() {
        try{
            $('#daOptions li').on('click', function(e) {
                control.handleGetPrize();
            })
    
            $('body').on('click', '#errorBtn',  function(e) {
                reloadPage()
            })
    
            /**
             * @desc 阻止loading遮罩被点击，传递事件
             */
            var loadingEle = document.getElementById('loading')
            loadingEle.addEventListener('click', function (e) { e.stopPropagation()}, false)
            loadingEle.addEventListener('touchmove', (e) => { e.preventDefault(); }, false)
        }
        catch{
            console.warn('bind event failure');
        }
       
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

    function main() {
        control.controlMain()
        setEventListen()
    }

    main()
})()