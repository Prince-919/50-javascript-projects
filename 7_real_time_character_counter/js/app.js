const textarea = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");

textarea.addEventListener("keyup", function () {
  updateCounter();
});

function updateCounter() {
  totalCounter.innerText = textarea.value.length;
  remainingCounter.innerText =
    textarea.getAttribute("maxLength") - textarea.value.length;
}
updateCounter();
