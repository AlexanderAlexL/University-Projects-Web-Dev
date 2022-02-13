// declaring the variables for each html elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// preventing the form to be submitted so we can validate the inputs first
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

// creating the error messages - using setError function that uses the 'element' and the 'message' parameters
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

// creating success messages
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

// checking if the email is valid using a standard validation condition
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// to validate the inputs, we need to take the values from the input fields (using trim to remove all the spaces from the value)
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    // Checking if the value of each input field is valid and in compliance with our requirements (conditions)

    // username:
    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    // email:
    if (emailValue === '') {
        setError(email, 'Email is required!');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address!')
    } else {
        setSuccess(email);
    }

    // password:
    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters!');
    } else {
        setSuccess(password);
    }

    // password confirmation:
    if (password2Value === '') {
        setError(password2, 'Please confirm your password!');
    } else if (password2Value != passwordValue) {
        setError(password2, "Passwords doesn't match!")
    } else {
        setSuccess(password2);
    }


};
