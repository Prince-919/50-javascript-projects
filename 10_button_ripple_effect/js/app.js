const btnElem = document.querySelector(".btn");

btnElem.addEventListener("mouseover", function (e) {
  const x = e.pageX - btnElem.offsetLeft;
  const y = e.pageY - btnElem.offsetTop;

  btnElem.style.setProperty("--xPos", x + "px");
  btnElem.style.setProperty("--yPos", y + "px");
});
