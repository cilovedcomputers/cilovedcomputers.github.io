// Theme name: wyj1
// Author: xiaoxiaoci
const btn = document.getElementById("edit-button");
function style() {
    $("#navbar").css("background-color", "rgba(144, 255, 192, 0.1)");
    $(".notify").css("background-color", "rgba(144, 255, 192, 0.1)");
    $("#edit-button").css("background-color", "rgba(144, 255, 192, 0.1)");
    document.getElementById("background-box").innerHTML = '<img src="themes/wyj1/background.jpg" style="opacity: 0.3; filter: alpha(opacity = 30);" alt="background" />'
}
btn.addEventListener("mouseover", function () {
    $("#edit-button").css("background-color", "rgba(144, 255, 192, 0.3)");
});
btn.addEventListener("mouseout", function () {
    $("#edit-button").css("background-color", "rgba(144, 255, 192, 0.1)");
});