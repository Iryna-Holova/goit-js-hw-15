// Get the necessary DOM elements
const [numberInput, createBtn, destroyBtn] =
  document.getElementById("controls").children;
const container = document.getElementById("boxes");

// Add event listeners to the buttons
createBtn.addEventListener("click", () =>
  createBoxes(Number(numberInput.value))
);
destroyBtn.addEventListener("click", () => destroyBoxes());

let boxSize = 30;

// Function to create boxes
function createBoxes(amount) {
  const newBoxes = [];

  for (let i = 1; i <= amount; i += 1) {
    // Generate a random color for each box
    const randomHexColor = getRandomHexColor();
    const newBox = document.createElement("div");
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = randomHexColor;
    boxSize += 10;

    newBoxes.push(newBox);
  }
  // Append the new boxes to the container
  container.append(...newBoxes);
}

// Function to destroy all boxes
function destroyBoxes() {
  // Clear the container and reset box size
  container.innerHTML = "";
  boxSize = 30;
}

// Function to generate a random hex color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
