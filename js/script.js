// Contact Form Validation

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill all the fields!");
        return false;
    }

    alert("Your message submitted successfully!");
    return false;
}