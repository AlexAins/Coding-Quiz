var timerEl = document.getElementById("time");
var startBntEl = document.getElementById("start");
var startScrEl = document.getElementById("start-screen");
var questionScrEl = document.getElementById("questions");
var questionTitleEl = document.getElementById("question-title");
var questionChoicesEl = document.getElementById("choices");


// Setting timer to start when Start button clicked and countdown
function countdown(){
    var timeLeft = 100;

    var timeInterval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = timeLeft;
    }, 1000);
}

// Function to set first question
function trial(){
    questionTitleEl.textContent = qArrShuffle[0].question;

    for (var i = 0; i < qArrShuffle[0].choices.length ; i++){

        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = i+1 + ": " + qArrShuffle[0].choices[i];
        questionChoicesEl.appendChild(choiceBtn);
        choiceBtn.setAttribute("data-index", i);
    }
}

startBntEl.addEventListener("click", function(){
    countdown();
    startScrEl.setAttribute("class", "hide");
    questionScrEl.setAttribute("class", "");
    trial();
});
