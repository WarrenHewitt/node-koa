// shareRedActive(params)

function getWechatInfo(cb, errorCb) {
    $.ajax({
        type: 'GET',
        url: 'http://dvo.iklicen.com/weixin/gzhbind/info/',
        dataType: 'json',
        success: cb,
        error: errorCb
    })
}
// 打开抽奖弹窗
/**
 * prize: {
 *   type: 1--线下奖 2--全民狂欢
 *   awards: 奖项名
 *   description: 描述
 *   otherBenefits: 其他福利 1--新春狂欢大礼包 2--车联网服务延长
 * }
 * @param prize
 */
function getPrize(prize) {
    setPrize(prize);
    $('#surprise').show();
    $('.wmask').addClass('holy-light').show();
}
function closePrize() {
    $('#surprise').hide();
    $('.wmask').removeClass('holy-light').hide();
}
// 设置奖品
function setPrize(prize) {
    var otherBenefitsEnum = {
        1: '新春狂欢大礼包',
        2: '车联网服务延期1个月'
    }
    $('#awards').text(prize.awards);
    if (prize.type === 1) {
        $('.surprise-prise').text(prize.description);
    }
    if (prize.type === 2) {
        $('.surprise-prise').text(prize.description);
    }
    $('#otherBenefits').text(otherBenefitsEnum[prize.otherBenefits]);
    $('#prizeImg').addClass('prize5');
}
// 查看我的奖品弹窗
function showPrize() {
    $('#myPrise').show();
    $('.wmask').show();
}
// 关闭我的奖品弹窗
function closeMyPrize() {
    $('#myPrise').hide();
    $('.wmask').hide();
}
function close() {
    closePrize();
    closeMyPrize();
}
var wmask = document.querySelector('#wmask');
wmask.addEventListener('click', function(e) {
    e.stopPropagation();
    close();
})
// document.addEventListener('click', function(e) {
//     if (e.target.className === 'wmask') {
//         e.stopPropagation();
//         close();
//     }
// });
document.querySelector('#myPrise').addEventListener('touchmove', function (e) {
    e.preventDefault();
});
document.querySelector('#surprise').addEventListener('touchmove', function (e) {
    e.preventDefault();
});
wmask.addEventListener('touchmove', function(e) {
    e.preventDefault();
})
