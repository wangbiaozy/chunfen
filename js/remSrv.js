'use strict';

(function (doc, win) {
    var width = 750;
    var height = 1500;
    var docEl = doc.documentElement;
    var rszEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var reCalc = function () {
        var reCalc = function reCalc() {
            var winWidth = docEl.clientWidth;
            var winHeight = docEl.clientHeight;
            if (!winWidth) return;
            var fontSize;
            if (winWidth < winHeight) {
                if (winWidth / winHeight > height / width) {
                    fontSize = 100 * (winHeight / height);
                } else {
                    fontSize = 100 * (winWidth / width);
                }
            } else {
                if (winWidth / winHeight > height / width) {
                    fontSize = 100 * (winWidth / height);
                } else {
                    fontSize = 100 * (winHeight / width);
                }
            }
            var browser = {
                versions : function () {
                    var u = navigator.userAgent, app = navigator.appVersion;
                    return{
                        trident: u.indexOf('Trident') > -1,//IE内核
                        presto: u.indexOf('Presto') > -1,//opera内核
                        webKit: u.indexOf('AppleWebKit') > -1,//苹果，谷歌内核
                        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTM') == -1,//火狐内核
                        mobile: !!u.match(/AppleWebKit.*Mobile.*/) ,//是否为移动端
                        ios: !!u.match(/\i[^;]+;( U;)? CPU.+Mac OS X/),//ios终端
                        android: u.indexOf('Android') >-1 || u.indexOf('Linux'),//Android终端或uc
                        iPhone:u.indexOf('iPhone') > -1,//是否为iphone或者QQHD浏览器
                        iPad:u.indexOf('iPad') > -1,//是否iPad
                        webApp:u.indexOf('Safari') == -1,//是否web应用程序，没有头部底部
                    };
                }(),
                language:(navigator.browserLanguage || navigator.language).toLowerCase()
            };
            if(browser.versions.mobile){
                docEl.style.fontSize = (fontSize > 100 ? 75 : fontSize) + 'px';
            }else {
                docEl.style.fontSize = 75 + 'px';
            }

            return reCalc;
        };
        return reCalc();
    }();
    if (!doc.addEventListener) return;
    win.addEventListener(rszEvt, reCalc);
})(document, window);
(function () {

    // 解决安卓不读取“|”
    if (/\|/.test(location.href)) {
        location.href = encodeURI(location.href);
    }
})();
var browser = {
    versions : function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return{
            trident: u.indexOf('Trident') > -1,//IE内核
            presto: u.indexOf('Presto') > -1,//opera内核
            webKit: u.indexOf('AppleWebKit') > -1,//苹果，谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTM') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) ,//是否为移动端
            ios: !!u.match(/\i[^;]+;( U;)? CPU.+Mac OS X/),//ios终端
            android: u.indexOf('Android') >-1 || u.indexOf('Linux'),//Android终端或uc
            iPhone:u.indexOf('iPhone') > -1,//是否为iphone或者QQHD浏览器
            iPad:u.indexOf('iPad') > -1,//是否iPad
            webApp:u.indexOf('Safari') == -1,//是否web应用程序，没有头部底部
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
};