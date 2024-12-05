function submitForm(event) {
    event.preventDefault();

    let submitButton = document.getElementById("submit");
    // Disable submit button and change its content
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "green";
    submitButton.textContent = "Form submitted successfully";

    // After 3 seconds, revert button to initial state
    setTimeout(function() {
        submitButton.disabled = false;
        submitButton.style.backgroundColor = "";
        submitButton.textContent = "Login";
    }, 3000);

    document.getElementById("login").reset();
}