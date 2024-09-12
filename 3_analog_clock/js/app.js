const hourElem = document.querySelector(".hour");
const minuteElem = document.querySelector(".minute");
const secondElem = document.querySelector(".second");

function updateAnalogClock() {
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();
  const hourDeg = (hour / 12) * 360;
  hourElem.style.transform = `rotate(${hourDeg}deg)`;
  const minuteDeg = (minute / 60) * 360;
  minuteElem.style.transform = `rotate(${minuteDeg}deg)`;
  const secondDeg = (second / 60) * 360;
  secondElem.style.transform = `rotate(${secondDeg}deg)`;

  setTimeout(updateAnalogClock, 1000);
}

updateAnalogClock();
