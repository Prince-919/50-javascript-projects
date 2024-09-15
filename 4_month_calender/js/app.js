const monthElem = document.querySelector(".date h1");
const fullDateElem = document.querySelector(".date p");
const daysElem = document.querySelector(".days");

const monthIdx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthIdx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthIdx, 1).getDay() - 1;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthElem.innerText = months[monthIdx];
fullDateElem.innerText = new Date().toDateString();

let days = "";

for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

daysElem.innerHTML = days;
