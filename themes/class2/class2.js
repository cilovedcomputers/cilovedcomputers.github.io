// Theme name: class2
// Author: xiaoxiaoci
const btn = document.getElementById("edit-button");
function style() {
    $("#navbar").css("background-color", "rgba(253, 255, 106, 0.15)");
    $(".notify").css("background-color", "rgba(253, 255, 106, 0.15)");
    $("#edit-button").css("background-color", "rgba(253, 255, 106, 0.15)");
    document.getElementById("background-box").innerHTML = '<img src="themes/class2/background.jpg" style="opacity: 0.35; filter: alpha(opacity = 35);" alt="background" />'
}
btn.addEventListener("mouseover", function () {
    $("#edit-button").css("background-color", "rgba(253, 255, 106, 0.35)");
});
btn.addEventListener("mouseout", function () {
    $("#edit-button").css("background-color", "rgba(253, 255, 106, 0.15)");
});