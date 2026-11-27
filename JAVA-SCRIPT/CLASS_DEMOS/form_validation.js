const form = document.getElementById("myForm");
const message = document.getElementById("message");

form.addEventListener("submit", updateForm);

function updateForm(event) {
    event.preventDefault();

    const user = document.getElementById("userName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (user === "" || email === "" || password.trim() === "") {
        message.textContent = "Invalid input";
        message.classList.remove("success");
    } else {
        message.textContent = "All fields are filled!";
        message.classList.add("success");
    }

    message.style.display = "block";
}