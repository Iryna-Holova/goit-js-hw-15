const changeColorBtn = document.querySelector("button.change-color");
const colorLabel = document.querySelector("span.color");
const body = document.querySelector("body");

changeColorBtn.addEventListener("click", handleChangeColor);

function handleChangeColor() {
  const randomHexColor = getRandomHexColor();
  colorLabel.textContent = randomHexColor;
  body.style.backgroundColor = randomHexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
