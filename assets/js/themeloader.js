function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}
var theme = document.createElement('script');
var script = document.createElement('script');
theme.type = 'text/javaScript';
script.type = 'text/javascript';
script.src = 'assets/js/AdjustLayout.js';
document.getElementsByTagName('head')[0].appendChild(script);
var theme_name = "default";
if (GetQueryString("theme") == null || GetQueryString("theme") == "0" || GetQueryString("theme") == "") {
    if (localStorage.getItem("hlp-theme-setting") != null && localStorage.getItem("hlp-theme-setting") != "0" && localStorage.getItem("hlp-theme-setting") != "") {
        theme_name = localStorage.getItem("hlp-theme-setting");
    } else {
        theme_name = "default";
    }
} else {
    theme_name = GetQueryString("theme");
}
theme.src = 'themes/' + theme_name + '/' + theme_name + '.js';
document.getElementsByTagName('head')[0].appendChild(theme);
localStorage.setItem("hlp-theme-setting", theme_name);