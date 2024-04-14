Notification.requestPermission().then((result) => {
    // document.getElementById("notify-debug2").innerHTML = "[调试信息] Notification.requestPermission() 返回值 " + result + " @localhost";
    console.log("[调试信息] Notification.requestPermission() 返回值 " + result + " @localhost");
});