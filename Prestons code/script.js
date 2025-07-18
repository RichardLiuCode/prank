document.getElementById("yes").addEventListener("click", function () {
    skibidi()
});
document.getElementById("no").addEventListener("click", function () {
    skibidi()
});
function skibidi() {
    document.body.requestFullscreen();
    document.body.webkitRequestFullscreen();
    document.getElementById("background").style.display = "revert";
    document.getElementById("audio").play();
    setInterval(function () {
        document.getElementById("audio").play();
    }, 3000);
}
document.addEventListener("keydown", function (e) {
    e.preventDefault();
})
