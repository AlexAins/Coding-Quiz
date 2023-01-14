var timerEl = document.getElementById("time");
var startBntEl = document.getElementById("start");
var startScrEl = document.getElementById("start-screen");
var questionScrEl = document.getElementById("questions");
var questionTitleEl = document.getElementById("question-title");
var questionChoicesEl = document.getElementById("choices");
var feedbackEl = document.getElementById("feedback");


// Setting timer to start when Start button clicked and countdown
var timer = 100;

function countdown(){
    var timeInterval = setInterval(function(){
        timer--;
        timerEl.textContent = timer;
    }, 1000);
}

// Function to set first question - x will become a count for which question.
qCount = 0;

function trial(){
    questionTitleEl.textContent = qArrShuffle[qCount].question;

    for (var i = 0; i < qArrShuffle[qCount].choices.length ; i++){

        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = i+1 + ": " + qArrShuffle[qCount].choices[i];
        questionChoicesEl.appendChild(choiceBtn);
        choiceBtn.setAttribute("data-index", i);
    }
}

// Answer button press
questionChoicesEl.addEventListener("click", function(event){
    if(event.target.matches("button")){
        var index = event.target.getAttribute("data-index");
        questionChoicesEl.innerHTML = "";
        feedbackEl.setAttribute("class","feedback");

        if(index == qArrShuffle[qCount].answer){
            qCount++;
            trial();
            feedbackEl.textContent = "Correct!";
        }
        else{
            qCount++;
            trial();
            timer -= 10;
            feedbackEl.textContent = "Wrong!";
        }
    }
})

// start button event
startBntEl.addEventListener("click", function(){
    countdown();
    startScrEl.setAttribute("class", "hide");
    questionScrEl.setAttribute("class", "");
    trial();
    console.log(qArrShuffle);
});
