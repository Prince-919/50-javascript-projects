const btnElem = document.querySelector(".btn");
const inputElem = document.querySelector("#input");
const copyIconElem = document.querySelector(".fa-copy");
const alertContainerElem = document.querySelector(".alert-container");

btnElem.addEventListener("click", function () {
  generatePassword();
});
copyIconElem.addEventListener("click", function () {
  copyPassword();
});

function generatePassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  inputElem.value = password;
  alertContainerElem.innerText = password + " copied!";
}

function copyPassword() {
  inputElem.select();
  inputElem.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputElem.value);
  if (inputElem.value) {
    alertContainerElem.classList.remove("active");
    setTimeout(() => {
      alertContainerElem.classList.add("active");
    }, 2000);
  }
}
