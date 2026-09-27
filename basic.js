// =============================
// Select Elements
// =============================

let form =
    document.getElementById("registerForm");

let username =
    document.getElementById("username");

let password =
    document.getElementById("password");

let confirmPassword =
    document.getElementById("confirmPassword");

let registerButton =
    document.getElementById("registerButton");


// Error Messages

let usernameError =
    document.getElementById("usernameError");

let passwordError =
    document.getElementById("passwordError");

let confirmPasswordError =
    document.getElementById("confirmPasswordError");

let successMessage =
    document.getElementById("successMessage");


// =============================
// Validation Function
// =============================

function validateForm() {

    let isValid = true;


    // =============================
    // Username Validation
    // =============================

    if (username.value.trim() === "") {

        usernameError.textContent =
            "Username is required";

        isValid = false;

    } else {

        usernameError.textContent = "";

    }


    // =============================
    // Password Validation
    // =============================

    if (password.value.trim() === "") {

        passwordError.textContent =
            "Password is required";

        isValid = false;

    } else {

        passwordError.textContent = "";

    }


    // =============================
    // Confirm Password Validation
    // =============================

    if (confirmPassword.value.trim() === "") {

        confirmPasswordError.textContent =
            "Confirm password is required";

        isValid = false;

    }

    else if (
        password.value !== confirmPassword.value
    ) {

        confirmPasswordError.textContent =
            "Passwords do not match";

        isValid = false;

    }

    else {

        confirmPasswordError.textContent = "";

    }


    // =============================
    // Enable / Disable Button
    // =============================

    registerButton.disabled = !isValid;

}


// =============================
// Input Events
// =============================

username.addEventListener(
    "input",
    validateForm
);

password.addEventListener(
    "input",
    validateForm
);

confirmPassword.addEventListener(
    "input",
    validateForm
);


// =============================
// Submit Event
// =============================

form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        successMessage.textContent =
            "User registered successfully!";

    }
);