const validationInput = document.getElementById("validation-input");
validationInput.addEventListener("blur", validateLength);

function validateLength(e) {
  const input = e.currentTarget;
  const dataLength = Number(input.getAttribute("data-length"));

  if (input.value.length === dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
