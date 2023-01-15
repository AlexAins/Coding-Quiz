// All variables connected to document
var clearEl = document.getElementById("clear");


// Getting score and initials to save to local storage



// Event listener to clear highscores when button pressed
clearEl.addEventListener("click", function(){
    localStorage.clear();
})