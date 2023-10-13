const [numberInput, createBtn, destroyBtn] =
  document.getElementById("controls").children;
const container = document.getElementById("boxes");

createBtn.addEventListener("click", () =>
  createBoxes(Number(numberInput.value))
);

destroyBtn.addEventListener("click", destroyBoxes);

let boxSize = 30;

function createBoxes(amount) {
  const newBoxes = [];

  for (let i = 1; i <= amount; i += 1) {
    const randomHexColor = getRandomHexColor();
    const newBox = document.createElement("div");
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = randomHexColor;
    boxSize += 10;

    newBoxes.push(newBox);
  }
  container.append(...newBoxes);
}

function destroyBoxes() {
  container.innerHTML = "";
  boxSize = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
