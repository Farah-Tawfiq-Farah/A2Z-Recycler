function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let phoneError = document.getElementById("phone-error");
    let emailError = document.getElementById("email-error");
    let nameError = document.getElementById("name-error");
    let submitButton = document.getElementById("submit");

    //name validation
    let namePattern = /^[a-zA-Z .]+$/;
    if (!namePattern.test(name)) {
        nameError.textContent = "This field allows only letters, spaces, and dots for upper and lower case letters";
        return false;
    } else {
        nameError.textContent = "";
    }

    //Email validation
    let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    email = email.toLowerCase();
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address";
        return false;
    } else {
        emailError.textContent = "";
    }

    // Phone validation
    if (!/^\d+$/.test(phone)) {
        phoneError.textContent = "Phone number should contain only numbers";
        return false;
    }
    if (!/^\d{10}$/.test(phone)) {
        phoneError.textContent = "Phone number should contain 10 digits";
        return false;
    } else {
        phoneError.textContent = "";
    }

    // Disable submit button and change its content
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "green";
    submitButton.textContent = "Form submitted successfully";

    // After 3 seconds, revert button to initial state
    setTimeout(function() {
        submitButton.disabled = false;
        submitButton.style.backgroundColor = "";
        submitButton.textContent = "Submit";
    }, 3000);
    return true;
}

// Handle the form subbmission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Reset the form if it is valid
    if(validateForm()) {
        document.getElementById("contact-form").reset();
    }
});