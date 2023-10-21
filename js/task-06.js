// Get the input element for validation
const validationInput = document.getElementById("validation-input");

// Add event listener for the blur event
validationInput.addEventListener("blur", validateLength);

// Function to validate the length of the input
function validateLength(e) {
  const input = e.currentTarget; // Get the current input element
  const dataLength = Number(input.getAttribute("data-length")); // Get the expected data length

  // Check if the input length matches the expected length & toggle classes
  if (input.value.length === dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
