const form = document.querySelector(".login-form");
const formInputs = document.querySelectorAll(".login-form input")
const btn = document.querySelector("button")

const handleSubmit = (event) => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
      if (email.value === "" || password.value === "") {
    return alert("Please fill up the Form!");
      }
    
    console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

form.addEventListener("submit", handleSubmit);
