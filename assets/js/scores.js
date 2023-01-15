// All variables connected to document
var clearEl = document.getElementById("clear");
var highscoresEl = document.getElementById("highscores");


// Event listener to clear highscores when button pressed
clearEl.addEventListener("click", function(){
    localStorage.clear();
})