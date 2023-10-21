// Get elements from the page
const fontSizeControl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

// Set the initial font size based on the control value
textElement.style.fontSize = fontSizeControl.value + "px";

// Add an input event listener
fontSizeControl.addEventListener("input", (e) =>
  changeFontSize(e, textElement)
);

// Function to change the font size
function changeFontSize(event, element) {
  element.style.fontSize = event.currentTarget.value + "px";
}
