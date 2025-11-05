// username validation
const userNameRegEx = /^[A-Za-z]{3,20}$/;
const signInBtn = document.querySelector(".btn");

function validateUserName() {
  const userNameInput = document.getElementById("user-name").value.trim();
  const userNameErr = document.querySelector("#user-name-error");

  if (userNameInput === "") {
    userNameErr.textContent = "user-name cannot be empty";
  } else if (userNameRegEx.test(userNameInput)) {
    console.log("user-name is valid");
    userNameErr.textContent = "";
  } else {
    userNameErr.textContent =
      "name invalid, use 3 - 20 characters of a-z or A-Z only";
  }
}

// email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail() {
  const emailInput = document.getElementById("email").value.trim();
  const emailErr = document.querySelector("#email-error");

  if (emailInput === "") {
    emailErr.textContent = "email cannot be empty";
  } else if (emailRegex.test(emailInput)) {
    console.log("email is valid");
    emailErr.textContent = "";
  } else {
    emailErr.textContent = "email invalid, use a real email address";
  }
}

// password validation
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]).{8}$/;

function validatePassword() {
  const passwordInput = document.getElementById("password").value.trim();
  const passwordErr = document.querySelector("#password-error");
  const confirmPasswordInput = document.getElementById("confirm-password").value.trim();
  const confirmPasswordErr = document.querySelector("#confirm-password-error");

  // password validation conditioners
  if (passwordInput === "") {
    passwordErr.textContent = "password cannot be empty";
  } else if (passwordInput.length != 8) {
    passwordErr.textContent = "password must be 8 characters";
  } else if (passwordRegex.test(passwordInput)) {
    console.log("password is valid");
    passwordErr.textContent = "";
  } else if (!passwordRegex.test(passwordInput)) {
    passwordError.textContent = "password must contain (a-z, A-Z, 0-9 and a symbol)";
  }

  // confirm-password validation conditioners
    if (confirmPasswordInput === "") {
    confirmPasswordErr.textContent = "confirm-password cannot be empty";
  } else if (confirmPasswordInput != passwordInput) {
    confirmPasswordErr.textContent =
      "confirm-password not the same with password";
  } else {
    confirmPasswordErr.textContent = "";
    console.log("confirm-password is same with password");
  }
}

// checkbox checker for password toggle
const confirmPassword = document.getElementById("confirm-password");
const password = document.getElementById("password");
const toggleCheckbox = document.getElementById("showPasswordToggle");

toggleCheckbox.addEventListener("change", function () {
  if (this.checked) {
    password.setAttribute("type", "text");
    confirmPassword.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
    confirmPassword.setAttribute("type", "password");
  }
});

// calling all validation functions
signInBtn.addEventListener("click", (event) => {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();
  validateUserName();
  validateEmail();
  validatePassword();
});

