// Theme name: default
// Author: xiaoxiaoci
const btn = document.getElementById("edit-button");
function style() {
    $("#navbar").css("background-color", "rgba(81, 84, 255, 0.25)");
    $(".notify").css("background-color", "rgba(81, 84, 255, 0.25)");
    $("#edit-button").css("background-color", "rgba(81, 84, 255, 0.25)");
    document.getElementById("background-box").innerHTML = "<iframe src=\"themes/default/background.html\" importance=\"high\" name=\"background-box\" title=\"background-box\" />"
}
btn.addEventListener("mouseover", function () {
    $("#edit-button").css("background-color", "rgba(81, 84, 255, 0.45)");
});
btn.addEventListener("mouseout", function () {
    $("#edit-button").css("background-color", "rgba(81, 84, 255, 0.25)");
});