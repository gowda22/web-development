const form = document.getElementById("myForm");
const message = document.getElementById("message");

form.addEventListener("submit", updateForm);

function updateForm(event) {
    event.preventDefault();

    const user = document.getElementById("userName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const regName = /^[A-Za-z]{3,}$/;s
    const regEmail = /^[A-Za-z0-9._%+-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/;
    const regPassword = /^.{8,}$/;

    message.classList.remove("success");
    message.style.display = "block";

    if (user === "" || email === "" || password.trim() === "") {
        message.textContent = "Please fill in all fields.";
    } else if (!regName.test(user)) {
        message.textContent = "Enter at least 3 English letters for the name.";
    } else if (!regEmail.test(email)) {
        message.textContent = "Enter a valid email address.";
    } else if (!regPassword.test(password)) {
        message.textContent = "Enter a password with at least 8 characters.";
    } else {
        message.textContent = "All fields are valid!";
        message.classList.add("success");
    }
}