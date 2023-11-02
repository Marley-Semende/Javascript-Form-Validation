# JavaScript User SignUp Form Validation

## Description

This project implements JavaScript validation for a user sign-up form. The validation process covers name, email, and password fields, ensuring entered information is valid before the form can be submitted.

## Code Example

### Email Validation

```javascript
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
```
