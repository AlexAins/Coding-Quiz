var timerEl = document.getElementById("time");
var startEl = document.getElementById("start");

// Setting timer to start when Start button clicked and countdown

function countdown(){

    var timeLeft = 100;

    var timeInterval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = timeLeft;
    }, 1000);
}

startEl.addEventListener("click", function(){
    countdown();
});
