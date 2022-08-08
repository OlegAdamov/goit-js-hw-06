
const form = document.querySelector(".login-form");


const handleSubmit = (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

      email.value === "" || password.value === "" ?
    alert(`Все поля должны быть заполнены`) :
    console.log(`Email: ${email.value}, Password: ${password.value}`);

    event.currentTarget.reset();
}

form.addEventListener("submit", handleSubmit);
