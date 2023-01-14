var timerEl = document.getElementById("time");
var startBntEl = document.getElementById("start");
var startScrEl = document.getElementById("start-screen");
var questionScrEl = document.getElementById("questions");

// Setting timer to start when Start button clicked and countdown

function countdown(){

    var timeLeft = 100;

    var timeInterval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = timeLeft;
    }, 1000);
}

startBntEl.addEventListener("click", function(){
    countdown();
    startScrEl.setAttribute("class", "hide");
    questionScrEl.setAttribute("class", "");
});
