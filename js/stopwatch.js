/* Stopwatch*/

let seconds = 0;

const display = document.getElementById("time-display");


// setInterval calls this every 3 seconds while the stopwatch is running
function tick() {
  seconds = seconds + 3;
  display.textContent = seconds;

  if (seconds >= 30) {
    stopTimer();
  }
}

function startTimer() {
  if (timer !== null || seconds >= 30) {
    return;
  }

  timer = setInterval(tick, 3000);
}

function stopTimer() {
  clearInterval(timer);  // stop calling tick()
  timer = null;
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  display.textContent = seconds;
}


// Connect each button to its function
document.getElementById("start-button").addEventListener("click", startTimer);
document.getElementById("stop-button").addEventListener("click", stopTimer);
document.getElementById("reset-button").addEventListener("click", resetTimer);
