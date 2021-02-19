const formContainer = document.querySelector("form");
const name = document.querySelector("#name-input");
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject-input");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email-input");
const emailError = document.querySelector("#email-error");
const adress = document.querySelector("#adress-input");
const adressError = document.querySelector("#adress-error");

function formRequirements() {
  event.preventDefault();

  if (name.value.trim().length === 0) {
    nameError.style.display = "block";
  } else {
    nameError.style.display = "none";
  }

  if (subject.value.trim().length >= 10) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (emailRequirements(email.value.trim()) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (adress.value.trim().length >= 25) {
    adressError.style.display = "none";
  } else {
    adressError.style.display = "block";
  }
}

formContainer.addEventListener("submit", formRequirements);

function emailRequirements(email) {
  const requirements = /\S+@\S+\.\S+/;
  const emailMatch = requirements.test(email);
  return emailMatch;
}
