const blurbox = document.getElementById("blur-box");
const setup_window = document.getElementById("theme-setup-window");
function theme_setup() {
    apply();
    $("#blur-box").css("opacity", "1");
    $("#blur-box").css("z-index", "9");
    $("#theme-setup-window").css("opacity", "1");
    $("#theme-setup-window").css("z-index", "10");
    // console.log(getComputedStyle(document.getElementById("navbar")).backgroundColor);
    $("#theme-setup-window").css("background-color", getComputedStyle(document.getElementById("navbar")).backgroundColor);
}
function show_not_aviliable() {
    apply();
    $("#blur-box").css("opacity", "1");
    $("#blur-box").css("z-index", "9");
    $("#error-window").css("opacity", "1");    
    $("#error-window").css("z-index", "10");
    $("#error-window").css("background-color", getComputedStyle(document.getElementById("navbar")).backgroundColor);
}