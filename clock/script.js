const hours = document.getElementById("number1");
const minutes = document.getElementById("number2");
const seconds = document.getElementById("number3");
const meridian = document.getElementById("meridian");

let theDate = new Date();
let theHour, theMinute, theSecond;

setInterval(() => {
  theHour = theDate.getHours();
  theMinute = theDate.getMinutes();
  theSecond = theDate.getSeconds();

  if (theHour < 12) {
    meridian.innerHTML = "ARMY TIME | AM";
  } else {
    meridian.innerHTML = "ARMY TIME | PM";
  }

  hours.innerHTML = theHour;
  minutes.innerHTML = theMinute;
  seconds.innerHTML = theSecond;

  theDate = new Date();
}, 1000);
