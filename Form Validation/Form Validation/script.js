document.addEventListener("DOMContentLoaded", function () {
  populateStates();

  let form = document.getElementById("reg-form");
  if (form) {
      form.addEventListener("submit", function (event) {
          event.preventDefault();

          let firstName = document.getElementById("firstName");
          let lastName = document.getElementById("lastName");
          let email = document.getElementById("inputEmail4");
          let phone = document.getElementById("phone");
          let password = document.getElementById("password");
          let conpassword = document.getElementById("verify-password");
          let city = document.getElementById("inputCity");
          let state = document.getElementById("inputState");

          let isValid = true;

          if (!isValidName(firstName.value)) {
              setError(firstName, "First name must start with a capital letter and contain no spaces or special characters, and be up to 50 characters.");
              isValid = false;
          } 
          else  setSuccess(firstName);

          if (!isValidName(lastName.value)) {
              setError(lastName, "Last name must start with a capital letter and contain no spaces or special characters, and be up to 50 characters.");
              isValid = false;
          } 
          else setSuccess(lastName);

          if (!validateEmail(email.value)) {
              setError(email, "Please enter a valid email address.");
              isValid = false;
          } 
          else setSuccess(email);

          if (!validatePhone(phone.value)) {
              setError(phone, "Please enter a valid 10-digit phone number.");
              isValid = false;
          } 
          else setSuccess(phone);

          if (!validatePassword(password.value)) {
              setError(password, "Passwords should have letters, special symbols, numbers, and be at least 8 characters long.");
              isValid = false;
          } 
          else setSuccess(password);

          if (!validateConfPassword(password.value, conpassword.value)) {
              setError(conpassword, "Passwords do not match.");
              isValid = false;
          } 
          else setSuccess(conpassword);

          if (!isValidInput(city.value, 50)) {
              setError(city, "City must start with a capital letter and contain no spaces or special characters, and be up to 50 characters.");
              isValid = false;
          } 
          else setSuccess(city);

          if (!isValidState(state.value)) {
              setError(state, "Please select a state from India.");
              isValid = false;
          } 
          else setSuccess(state);

          if (isValid) {
              alert("Form submitted successfully!");
              form.submit();
          }
      });
  } 
  else console.error("Form element not found!");
});

const indianStates = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"];

function isValidName(input) {
  const nameRegex = /^[A-Z][a-zA-Z]*$/;
  return nameRegex.test(input) && input.length <= 50;
}

function isValidInput(input, maxLength) {
  return input.length <= maxLength;
}

function isValidState(state) {
  
  return indianStates.includes(state);
}

function validateConfPassword(password, conpassword) {
  return password === conpassword;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^[0-9]{10}$/;
  return phone
  Regex.test(phone) && phone !== "1234567890";
}

function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\$\%\^\&\!@\#\*\(\)\+\=`~\?\>\<])/;
    return regex.test(password) && password.length >= 8 && password.toLowerCase() !== "password";
}

function setError(element, message) {
    element.classList.remove("success");
    element.classList.add("error");
    let errorElement = element.nextElementSibling;
    if (errorElement) {
        errorElement.innerText = message;
    }
}

function setSuccess(element) {
    element.classList.remove("error");
    element.classList.add("success");
    let errorElement = element.nextElementSibling;
    if (errorElement) {
        errorElement.innerText = "";
    }
}

function populateStates() {
    let stateSelect = document.getElementById("inputState");
    indianStates.forEach(state => {
        let option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
}

populateStates();
