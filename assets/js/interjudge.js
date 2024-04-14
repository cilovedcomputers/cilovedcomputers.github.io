function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}
// alert(GetQueryString("interface"));
if (GetQueryString("interface") == "pc") {
    $("#page-pc").css("opacity", "1");
    $("#page-mobile").css("opacity", "0");
    $("#page-mobile").css("z-index", "0");
} else if (GetQueryString("interface") == "mobile") {
    $("#page-pc").css("opacity", "0");
    $("#page-mobile").css("opacity", "1");
    $("#page-pc").css("z-index", "0");
} else {
    window.location.href = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? "./index.html?interface=mobile" : "./index.html?interface=pc";
}
if (GetQueryString("user") != null) {
    alert("Welcome to 大伟帝国, " + GetQueryString("user"));
}