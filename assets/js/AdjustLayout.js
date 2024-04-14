let timerbox = document.getElementById("timer-box");
function adjust() {
    // console.log((timerbox.offsetHeight + 60) + "px");
    $("#notify-box").css("top", (timerbox.offsetHeight - 20) + "px");
}
function loaded() {
    try {
        style();
    } catch (error) {
        console.log(error);
    }
    // document.getElementById("homework").contentEditable = "true";
    setTimeout(() => document.getElementById("page-onload-box").innerHTML = "", 300);
    setTimeout(() => $("#page-onload-box").css("z-index", "-1"), 600);
    setTimeout(() => $("#page-onload-box").css("opacity", "0"), 600);
    var display_homework = localStorage.getItem("hlp-current-homework", homework.innerHTML);
    if (display_homework == null || display_homework == "") {
        document.getElementById("homework").innerHTML = "[空]";
    } else {
        document.getElementById("homework").innerHTML = localStorage.getItem("hlp-current-homework", homework.innerHTML);
    }
    $("#blur-box").css("opacity", "0");
    $("#blur-box").css("z-index", "-2");
    $("#theme-setup-window").css("opacity", "0");
    $("#theme-setup-window").css("z-index", "-3");
}
document.body.onload = setTimeout(() => loaded(), 300);
setInterval(adjust, 500);