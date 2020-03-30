const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// functions 
// showError 
function showError(username, message) {
    const formControl = username.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// showSuccess
function showSuccess(username) {
    const formControl = username.parentElement;
    formControl.className = 'form-control success';
}

// Check if email is valid 
// function isValid(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

// check length function
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must have atleast ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} cannot be more than ${max} characters`);
    }
}

// function to check password match 
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}
// Function to check conditions 
function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// get field name function 
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Event Listeners 
form.addEventListener('submit', function(e) {
    // if(username.value === '') {
    //     showError(username, 'Username is required');
    // } else {
    //     showSuccess(username);
    // }
    // if(email.value === '') {
    //     showError(email, 'Email is required');
    // } else if (!isValid(email.value)){
    //     showError(email, 'Email is invalid');
    // }else {
    //     showSuccess(email);
    // }
    // if(password.value === '') {
    //     showError(password, 'Password is required');
    // } else {
    //     showSuccess(password);
    // }
    // if(password2.value === '') {
    //     showError(password2, 'Password is required');
    // } else if(password2.value !== password){
    //     showError(password2, 'Passwords dont match')
    // } else {
    //     showSuccess(password2);
    // }
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
    e.preventDefault();
});