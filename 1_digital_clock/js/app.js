const hourElem = document.getElementById("hour");
const minuteElem = document.getElementById("minutes");
const secondElem = document.getElementById("seconds");
const ampmElem = document.getElementById("ampm");

function updateClock() {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();

  let ampm = "AM";
  if (hour > 12) {
    hour -= 12;
    ampm = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  hourElem.innerText = hour;
  minuteElem.innerText = minute;
  secondElem.innerText = second;
  ampmElem.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
