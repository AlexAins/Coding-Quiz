// All variables connected to document
var timerEl = document.getElementById("time");
var timerSection = document.getElementById("timerSection");
var startBntEl = document.getElementById("start");
var startScrEl = document.getElementById("start-screen");
var questionScrEl = document.getElementById("questions");
var questionTitleEl = document.getElementById("question-title");
var questionChoicesEl = document.getElementById("choices");
var feedbackEl = document.getElementById("feedback");
var endScrEl = document.getElementById("end-screen");


// Setting timer to start when Start button clicked and countdown
var timer = 100;

function countdown(){
    var timeInterval = setInterval(function(){
        timer--;
        timerEl.textContent = timer;

        // Brings up final screen when timer hits 0
        if(timer === 0) {
            questionScrEl.setAttribute("class", "hide");
            endScrEl.setAttribute("class","");;
        }
    }, 1000);
}

// Function to print questions and answers on buttons
qCount = 0;

function questions(){
    questionTitleEl.textContent = qCount+1 +": " + qArrShuffle[qCount].question;

    for (var i = 0; i < qArrShuffle[qCount].choices.length ; i++){
        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = i+1 + ": " + qArrShuffle[qCount].choices[i];
        questionChoicesEl.appendChild(choiceBtn);
        choiceBtn.setAttribute("data-index", i);
    }
}

// Event listener for answer button press.
questionChoicesEl.addEventListener("click", function(event){

    // Checking it was a button being clicked
    if(event.target.matches("button")){
        var index = event.target.getAttribute("data-index");
        questionChoicesEl.innerHTML = "";
        feedbackEl.setAttribute("class","feedback");

        // Statement to see if button pressed is correct answer
        if(index == qArrShuffle[qCount].answer && qCount < 9){
            qCount++;
            questions();
            feedbackEl.textContent = "Correct!";
        }
        // Statement to see if button press was incorrect 
        else if(index != qArrShuffle[qCount].answer && qCount < 9){
            qCount++;
            questions();
            timer -= 10;
            feedbackEl.textContent = "Wrong!";
        }
        // Statement to bring up final screen after 10 questions answered
        else if(qCount >= 9){
            questionScrEl.setAttribute("class", "hide");
            endScrEl.setAttribute("class","");
        }
    }
})

// start button event
startBntEl.addEventListener("click", function(){
    countdown();
    timerSection.setAttribute("class", "timer");
    startScrEl.setAttribute("class", "hide");
    questionScrEl.setAttribute("class", "");
    questions();
});


// Need to write something to save timer left as score 
// Need to write something to save score with initials 
// Need to write something to connect saved scores onto High Score page and organize them in order of largest number
// Need to write something to clear highscores



