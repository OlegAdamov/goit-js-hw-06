
const form = document.querySelector(".login-form");


const handleSubmit = (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert(`Все поля должны быть заполнены`)
  } else {
    console.log(`Email: ${email.value}, Password: ${password.value}`);
  }
   return event.currentTarget.reset();}


form.addEventListener("submit", handleSubmit);
