const containerElem = document.querySelector(".container");

for (let i = 0; i < 40; i++) {
  const colorContainerElem = document.createElement("div");
  colorContainerElem.classList.add("color-container");
  containerElem.appendChild(colorContainerElem);
}

const colorContainerElements = document.querySelectorAll(".color-container");

generateColors();
function generateColors() {
  colorContainerElements.forEach((colorContainerElem) => {
    const color = randomColor();
    colorContainerElem.style.background = "#" + color;
    colorContainerElem.innerText = "#" + color;
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let i = 0; i < colorCodeLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNumber, randomNumber + 1);
  }
  return colorCode;
}
randomColor();
