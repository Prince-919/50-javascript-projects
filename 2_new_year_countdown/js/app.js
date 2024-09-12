const daysElem = document.getElementById("day");
const hourElem = document.getElementById("hour");
const minuteElem = document.getElementById("minute");
const secondElem = document.getElementById("second");
const newYearTime = new Date("Jan 1, 2025 00:00:00");

function updateCountdown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  daysElem.innerText = d;
  hourElem.innerText = h;
  minuteElem.innerText = m;
  secondElem.innerText = s;
  setTimeout(updateCountdown, 1000);
}

updateCountdown();
