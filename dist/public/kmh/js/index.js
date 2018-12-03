
setTimeout(() => {
    
    $('.loading').attr('style', 'display: none')
    setLosePage();
}, 1000);


function reloadPage() {
    window.location.reload()
    setTimeout(() => {
        window.location.href = window.location.href.replace(/#.*/g,'');
    }, 300);
}

function setLosePage() {
    $('.lose-page').html('<div><img src="" alt=""></div><p>哎呀~ 页面走丢了</p><div><button onclick=reloadPage()>重新加载</button></div>')
}
