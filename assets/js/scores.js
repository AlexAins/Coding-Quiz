// All variables connected to document
var clearEl = document.getElementById("clear");


// Event listener to clear highscores when button pressed
clearEl.addEventListener("click", function(){
    localStorage.clear();
})