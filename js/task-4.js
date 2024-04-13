const form = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const info = {
    email: formEl.email.value.trim(),
    password: formEl.password.value.trim(),
  };
  console.log(info);

  if (info.email === "" || info.password === "") {
    alert("All form fields must be filled in");
  }

  event.currentTarget.reset();
};

form.addEventListener("submit", onFormSubmit);
