const backgroundImage = document.querySelector("#background-image");

window.addEventListener("scroll", function () {
  updateImage();
});

function updateImage() {
  backgroundImage.style.opacity = 1 - window.pageYOffset / 900;
  backgroundImage.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}
