
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

const email_error = document.getElementById('email_error');
const pass_error = document.getElementById('pass_error');

form.addEventListener('submit', (e) => 
    {
    e.preventDefault();
    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var pass_check = /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    // console.log('check', email.value, password.value, fname.value, current_password.value)

    if (!email.value.match(email_check))
    {
        e.preventDefault();
        email_error.innerHTML = "Valid Email is required.";

    }
    else 
    {
        e.preventDefault();
        email_error.innerHTML = "";
    }


    if (!password.value.match(pass_check)) 
    {
        e.preventDefault();
        pass_error.innerHTML = "Password must contain atleast one small letter, one special character, one capital letter and a number";

    }
    else {
        e.preventDefault();
        pass_error.innerHTML = "";
    }
    if (password.value == "") 
    {
        e.preventDefault();
        pass_error.innerHTML = "Please enter the password"
    }

})