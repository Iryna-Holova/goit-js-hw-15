// Select the login form
const loginForm = document.querySelector(".login-form");

// Add a submit event listener to the form
loginForm.addEventListener("submit", onSubmit);

// Function to handle form submission
function onSubmit(e) {
  e.preventDefault();

  // Extract values from the form elements
  const form = e.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  // Check if any field is empty
  if (email === "" || password === "") return alert("Please fill all fields");

  // Store the form data in an object
  const formData = {
    email,
    password,
  };

  // Log the form data and reset the form
  console.log(formData);
  form.reset();
}
