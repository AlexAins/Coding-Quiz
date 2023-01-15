// All variables connected to document
var clearEl = document.getElementById("clear");
var highscoresEl = document.getElementById("highscores");

// Making leaderboard from Local Storage
function LeaderBoard(){
    if(localStorage.length !== 0 ){

        var hsListFinal = JSON.parse(localStorage.getItem("hs"));

        for (var i = 0; i < hsListFinal.length ; i++){
            var highScoreList = document.createElement("li");
            highScoreList.textContent = hsListFinal[i].initials + " - " + hsListFinal[i].score;
            highscoresEl.appendChild(highScoreList);
        }
    }
    else{
        highscoresEl.textContent = "Take the quiz to submit a score!"
    }
}

LeaderBoard();

// Event listener to clear highscores when button pressed
clearEl.addEventListener("click", function(){
    localStorage.clear();
    LeaderBoard();
})