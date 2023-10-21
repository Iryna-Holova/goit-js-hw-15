// Select the change color button, color label, and body element
const changeColorBtn = document.querySelector("button.change-color");
const colorLabel = document.querySelector("span.color");
const body = document.querySelector("body");

// Add click event listener to the button
changeColorBtn.addEventListener("click", handleChangeColor);

// Function to handle color change
function handleChangeColor() {
  // Generate a random hex color
  const randomHexColor = getRandomHexColor();
  // Display the random hex color
  colorLabel.textContent = randomHexColor;
  // Change the background color of the body
  body.style.backgroundColor = randomHexColor;
}

// Function to generate a random hex color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
