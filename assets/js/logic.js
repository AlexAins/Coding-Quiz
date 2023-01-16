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
var finalScoreEl = document.getElementById("final-score");
var correctSound = new Audio('./assets/sfx/correct.wav');
var incorrectSound = new Audio('./assets/sfx/incorrect.wav');
var initialsEl = document.getElementById("initials");
var submitBntEl = document.getElementById("submit");

// Setting timer to start when Start button clicked and countdown
var timer = 100;

function countdown(){
    var timeInterval = setInterval(function(){
        timer--;
        timerEl.textContent = timer;

        // Brings up final screen when timer hits 0 or last question is answered
        if(timer <= 0 || qCount == 10) {
            questionScrEl.setAttribute("class", "hide");
            endScrEl.setAttribute("class","");
            clearInterval(timeInterval);
            finalScoreEl.textContent = timer;
        }
    }, 1000);
}

// Function to print questions and answers on buttons up to 10 questions
qCount = 0;

function questions(){
    if(qCount <10){
        questionTitleEl.textContent = qCount+1 +": " + qArrShuffle[qCount].question;

        for (var i = 0; i < qArrShuffle[qCount].choices.length ; i++){
            var choiceBtn = document.createElement("button");
            choiceBtn.textContent = i+1 + ": " + qArrShuffle[qCount].choices[i];
            questionChoicesEl.appendChild(choiceBtn);
            choiceBtn.setAttribute("data-index", i);
        }
    }
}

// start button event
startBntEl.addEventListener("click", function(){
    countdown();
    timerSection.setAttribute("class", "timer");
    startScrEl.setAttribute("class", "hide");
    questionScrEl.setAttribute("class", "");
    questions();
});

// Event listener for answer button press.
questionChoicesEl.addEventListener("click", function(event){

    // Checking it was a button being clicked
    if(event.target.matches("button")){
        var index = event.target.getAttribute("data-index");
        questionChoicesEl.innerHTML = "";
        feedbackEl.setAttribute("class","feedback");

        // Statement to see if button pressed is correct answer
        if(index == qArrShuffle[qCount].answer){
            qCount++;
            questions();
            correctSound.play();
            feedbackEl.textContent = "Correct!";
        }
        // Statement to see if button press was incorrect 
        else{
            qCount++;
            questions();
            if(timer > 10){
                timer -= 10;
            }
            else {
                timer = 1
            }
            incorrectSound.play();
            feedbackEl.textContent = "Wrong!";
        }
    }
})

// Submitting Initials to local storage
submitBntEl.addEventListener("click", function(){
    var finalInitials = initialsEl.value;
    var finalScore = timer;
    
    var highScoreString = localStorage.getItem("hs");
    var hsList = JSON.parse(highScoreString) ?? [];

    var newScore = {
        initials: finalInitials,
        score: finalScore,
    }
   
    if (finalInitials === "") {
        alert(" Error \n Please include your initials!");
    }
    else{
        hsList.push(newScore);
        hsList.sort((a,b) => b.score - a.score);
        hsList.splice(10);
        localStorage.setItem("hs", JSON.stringify(hsList));
        window.location = "highscores.html";
    }
})






