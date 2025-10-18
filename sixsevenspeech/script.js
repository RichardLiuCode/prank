document.getElementById("button").addEventListener("click", function () {
    let speech = new SpeechSynthesisUtterance();
    speech.text = "six seven";
    speech.rate = 0.2;
    window.speechSynthesis.speak(speech);
});