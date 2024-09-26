const monthNameElem = document.getElementById("month-name");
const dayNameElem = document.getElementById("day-name");
const dayNumberElem = document.getElementById("day-number");
const yearElem = document.getElementById("year");

function updateDate() {
  const date = new Date();
  const monthName = date.toLocaleString("en", {
    month: "long",
  });
  const dayName = date.toLocaleString("en", {
    weekday: "long",
  });
  const dayNumber = date.getDate();
  const year = date.getFullYear();

  monthNameElem.innerText = monthName;
  dayNameElem.innerText = dayName;
  dayNumberElem.innerText = dayNumber;
  yearElem.innerText = year;
}

updateDate();
