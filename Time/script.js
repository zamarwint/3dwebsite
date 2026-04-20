// BUTTONS
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const stopButton = document.getElementById("stop");

// DATE OBJECTS
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

let intervalID;

function getTargetTimeFromInputs() {
  if (!hour.value || !minute.value || !second.value) {
    alert("Please enter ALL VALUES in the boxes below");
    return;
  }

  let hours = parseInt(hour.value);
  let minutes = parseInt(minute.value);
  let seconds = parseInt(second.value);

  // CURRENT DATE
  const now = new Date();

  const target = new Date(now);
  target.setHours(target.getHours() + hours);
  target.setMinutes(target.getMinutes() + minutes);
  target.setSeconds(target.getSeconds() + seconds);

  return target;
}

function start() {
  const target = getTargetTimeFromInputs();
  if (!target) return;

  if (intervalID) clearInterval(intervalID);

  intervalID = setInterval(() => {
    const now = new Date();
    const distance = target - now;

    if (distance <= 0) {
      clearInterval(intervalID);
      alert("Countdown complete!");
      return;
    }

    // Breakdown into time parts
    const seconds = Math.floor((distance / 1000) % 60);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);

    console.log(hours, minutes, seconds);

    hour.value = hours;
    minute.value = minutes;
    second.value = seconds;
  }, 1000);
}

function reset() {
  clearInterval(intervalID);
  hour.value = "";
  minute.value = "";
  second.value = "";
}

function stop() {
  clearInterval(intervalID);
}

startButton.addEventListener("click", start);
resetButton.addEventListener("click", reset);
stopButton.addEventListener("click", stop);
