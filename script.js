var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var submitBtn = document.getElementById("submit");
var resetBtn = document.getElementById("reset");
var timeLeft = document.getElementById("time-left");

// Hide reset button and set timer text on start 
resetBtn.style.display = "none";
timeLeft.innerHTML = "No timer running"

submitBtn.addEventListener("click", function() {
    exists = true;
    startTime = Date.now();
    timeoutTime = (seconds.value * 1000) + (minutes.value * 1000 * 60) + (hours.value * 1000 * 60 * 60);

    // Set timer timeout
    timeoutID = setTimeout(() => {
        resetBtn.style.display = "none";
        exists = false;
        clearInterval(intervalID);
        timeLeft.innerHTML = "No timer running";
        alert("beep beep");
    }, timeoutTime);
    resetBtn.style.display = "inline-block";

    // Update text
    updateTimer();
    intervalID = setInterval(function() {
        updateTimer();
    }, 1000);
}); 

// Cleanup stuff after reseting timer
resetBtn.addEventListener("click", function() {
    clearInterval(timeoutID);
    clearInterval(intervalID);
    timeLeft.innerHTML = "No timer running";
    hours.value = "";
    minutes.value = "";
    seconds.value = "";
    resetBtn.style.display = "none";
    exists = false;
    console.log("timeout cleared");
})

// Function to update text when timer is running
function updateTimer() {
    timeLeftSeconds = Math.round((startTime + timeoutTime - Date.now())/1000);
    timeLeft.innerHTML = "Time left: " + timeLeftSeconds + " seconds";
}