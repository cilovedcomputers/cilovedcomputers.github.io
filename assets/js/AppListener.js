var version = '<a href="changes.html" target="_blank" title="View changes of this version">beta_0.4.0.55.web (UTC+8 Unreleased)</a>';
var errorlevel = 0;
var monitorName = "Unknown";
var tmp = "0";
var snd = "0";
var comport = "COM3";
var deviceID = "N/A";
function read() {
    $.get('http://localhost:52122/appdata.dat', function (data) {
        var lines = data.split(", "); //按行读取
        $.each(lines, function (i, value) {
            if (i == 0) {
                if (value == "HLP Data File") {
                    // console.log(value);
                    errorlevel = 0;
                } else {
                    console.log("Error 3");
                    errorlevel = 3;
                    return 3;
                }
            } else if (i == 7) {
                monitorName = value;
            } else if (i == 8) {
                tmp = value;
            } else if (i == 9) {
                snd = value;
            } else if (i == 10) {
                comport = value;
            } else if (i == 11) {
                deviceID = value;
            } else {
                // console.log(value);
            }
        });
    });
    // $.get('http://localhost:52122/homework.html', function (data) {
        // var display_homework = data;
        // document.getElementById("homework").innerHTML = display_homework;
    // });
}
function update_data() {
    read();
    if (errorlevel == 3) {
        document.getElementById("monitor").innerHTML = "传感器未正确连接。(3)";
        document.getElementById("notify-debug1").innerHTML = "[错误] 传感器未正确连接。(3)<br />Cannot connect to local port " + comport + ". @localhost";
        document.getElementById("info-box").innerHTML = "<strong>耀界™自习课智慧面板 Beta</strong><br />版本 " + version + "<br />设备 ID：无法获取：传感器未正确连接。(3)<br />Powered By the DJSC Team. 大伟帝国版权所有 侵权必究";
    } else if (errorlevel == 0) {
        document.getElementById("monitor").innerHTML = "今日值日班长：" + monitorName;
        document.getElementById("notify-debug1").innerHTML = "<strong>环境状况</strong><br />传感器端口：" + comport + "<br />室温：" + tmp + "℃<br />响度指数：" + snd;
        document.getElementById("info-box").innerHTML = "<strong>耀界™自习课智慧面板 Beta</strong><br />版本 " + version + "<br />设备 ID：" + deviceID + "<br />Powered By the DJSC Team. 大伟帝国版权所有 侵权必究";
    }
}
$.get('http://localhost:52122/notice.html', function (data) {
    document.getElementById("notify-box").innerHTML = '<p id="notify-box-title">公告栏</p>' + data;
});
setInterval(update_data, 500);