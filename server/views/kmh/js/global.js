window.gsInfo = {
    wxNickname: 'frank',
    wxAvatar: 'https://wx.qlogo.cn/mmopen/vi_32/4uuCiaibGOLhvfa0Ubiapbt01CY12CtKJdnGetLN25PG4obBz4S2QPPpMfZliaZAuaficubWyiakSrgFDnTcPXZ8lr7Q/132',
    wxFocused: false,
}

var appAPI = {
    platform: function() {
        var  nav = window.navigator.appVersion.toLocaleLowerCase();
        return /iphone/.test()
    },

    goOpenWeChat: function() {
        try {
            if(this.platform) {
                window.KLCWebJSObject.openWXViewController()
            } else {
                window.native.openWXViewController()
            }
        } catch{
            tools.toast('打开app绑定微信错误')
        }
    },

    shareRedActive: function(params) {
        try {
            if(this.platform) {
                window.KLCWebJSObject.shareRedActive(params)
            } else {
                window.native.shareRedActive(params)
            }
        } catch{
            tools.toast('分享发生错误')
        }
    }
}
