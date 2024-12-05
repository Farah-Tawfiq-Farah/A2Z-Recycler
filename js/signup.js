function validateForm() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let emailError = document.getElementById('email-error');
    let passwordError = document.getElementById('password-error');
    let confirmPasswordError = document.getElementById('confirm-password-error');
    let submitButton = document.getElementById("submit");
    
    let valid = true;

    // Reset error messages
    emailError.textContent = '';
    passwordError.textContent = '';

    //Email validation
    let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    email = email.toLowerCase();
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address";
        return false;
    } else {
        emailError.textContent = "";
    }

    // Password Validation
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,15}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = 'Password must be 8-15 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
        return false;
    } else {
        passwordError.textContent = "";
    }

    // Validate passwords match
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        return false;
    } else {
        confirmPasswordError.textContent = "";
    }

    // Disable submit button and change its content
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "green";
    submitButton.textContent = "Form submitted successfully";

    // After 3 seconds, revert button to initial state
    setTimeout(function() {
        submitButton.disabled = false;
        submitButton.style.backgroundColor = "";
        submitButton.textContent = "Sign-Up";
    }, 3000);

    return true;
}

// Handle the form subbmission
document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();
    // Reset the form if it is valid
    if(validateForm()) {
        document.getElementById("login").reset();
    }
});