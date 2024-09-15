const imageContainerElem = document.querySelector(".image-container");
const prevElem = document.getElementById("prev");
const nextElem = document.getElementById("next");

let x = 0;
let timer;
prevElem.addEventListener("click", () => {
  x += 45;
  clearTimeout(timer);
  updateGallery();
});
nextElem.addEventListener("click", () => {
  x -= 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageContainerElem.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x -= 45;
    updateGallery();
  }, 3000);
}

updateGallery();
