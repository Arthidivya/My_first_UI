
const s_email = document.getElementById('s_email');
const s_password = document.getElementById('s_password');
const s_form= document.getElementById('s_form');
const current_password = document.getElementById('current_password');
const fname = document.getElementById('fname');

const e_error = document.getElementById('e_error');
const p_error = document.getElementById('p_error');
const cp_error = document.getElementById('cp_error');
const name_error = document.getElementById('name_error');

s_form.addEventListener('submit', (e) => {
    e.preventDefault();
    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var pass_check = /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var n_check = /[A-Za-z][A-Za-z0-9_]{3,50}$/;

    // console.log('check', email.value, password.value, fname.value, current_password.value)

    if (!s_email.value.match(email_check)) {
        e.preventDefault();
        e_error.innerHTML = "Valid Email is required";

    }
    else {
        e.preventDefault();
        e_error.innerHTML = "";
    }


    if (!s_password.value.match(pass_check)) {
        e.preventDefault();
        p_error.innerHTML = "Password must contain atleast one small letter, one special character, one capital letter and a number";

    }
    else {
        e.preventDefault();
        p_error.innerHTML = "";
    }
    if (s_password.value == "") {
        e.preventDefault();
        p_error.innerHTML = "Please enter the password"
    }


    if (!fname.value.match(n_check)) {
        e.preventDefault();
        name_error.innerHTML = "Enter the valid Username.Username must between 3 to 50 characters.";
    }
    else
    {
        e.preventDefault();
        name_error.innerHTML="";
    }
    if(fname.value=="")
        {
            e.preventDefault();
            name_error.innerHTML="Enter the username";
        }
        

    if(current_password.value!=(s_password.value))
    {
        e.preventDefault();
        cp_error.innerHTML = "Password and Current password doesn't match";
    }
    else {
        e.preventDefault();
        cp_error.innerHTML = "";
    }
    if (current_password.value == "") 
    {
        e.preventDefault();
        cp_error.innerHTML = "Enter the current password";
    }

})