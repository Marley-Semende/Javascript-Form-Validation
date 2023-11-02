//add focus event listener
const inputElem = document.querySelectorAll(".input");
inputElem.forEach((element) => {
  element.addEventListener(
    "focus",
    (e) => {
      e.target.style.background = "#CFD8DC";
    },
    true
  );
});

//add blur event listener

inputElem.forEach((element) => {
  element.addEventListener(
    "blur",
    (e) => {
      e.target.style.background = "#F5F5F5";
    },
    true
  );
});

//add event listener for button
document.querySelector(".button").addEventListener("click", (e) => {
  e.preventDefault();
  const nameElem = document.getElementById("name");
  const nameErrorMessage = document.querySelector(".name-error-element");

  //Name validation
  if (nameElem.value.trim() === "") {
    nameElem.style.border = "#FF0000 1px solid";
    nameErrorMessage.textContent = "This field is required!";
    nameErrorMessage.style.color = "#FF0000";
  } else if (nameElem.value.length < 6) {
    nameElem.style.border = "#FF0000 1px solid";
    nameErrorMessage.textContent = "Please enter a longer name";
    nameErrorMessage.style.color = "#FF0000";
  } else {
    nameElem.style.border = " #4CAF50 1px solid";
    nameErrorMessage.textContent = "";
  }

  //Email validation
  const emailElem = document.getElementById("email");
  const emailErrorMessage = document.querySelector(".email-error-element");
  const re =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailElem.value.trim() === "") {
    emailElem.style.border = "#FF0000 1px solid";
    emailErrorMessage.textContent = "This field is required!";
    emailErrorMessage.style.color = "#FF0000";
  } else if (!emailElem.value.match(re)) {
    emailElem.style.border = "#FF0000 1px solid";
    emailErrorMessage.textContent = "Please enter a valid email";
    emailErrorMessage.style.color = "#FF0000";
  } else {
    emailElem.style.border = "#4CAF50 1px solid";
    emailErrorMessage.textContent = "";
  }
  //password validation
  const password1 = document.getElementById("password");
  const password2 = document.getElementById("password2");
  const passwordErrorMessage = document.querySelectorAll(
    ".password-error-element"
  );
  if (password1.value.trim() !== password2.value.trim()) {
    password1.style.border = "#FF0000 1px solid";
    password2.style.border = "#FF0000 1px solid";
    passwordErrorMessage.forEach((password) => {
      password.textContent = "Passwords must match";
      password.style.color = "#FF0000";
    });
  } else if (password1.value.trim() === "" && password2.value.trim() === "") {
    password1.style.border = "#FF0000 1px solid";
    password2.style.border = "#FF0000 1px solid";
    passwordErrorMessage.forEach((password) => {
      password.textContent = "This field is required!";
      password.style.color = "#FF0000";
    });
  } else {
    password1.style.border = "#4CAF50 1px solid";
    password2.style.border = "#4CAF50 1px solid";
    passwordErrorMessage.forEach((password) => {
      password.textContent = "Passwords match";
      password.style.color = "#4CAF50";
    });
  }
});
