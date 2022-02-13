//this function will clear the errors once we provide correct format or at start
function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}



//sets error inside tag of id
function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}



//perform validation and if validation fails,set the value of returnval to false
function validateForm() {
    var returnval = true;
    clearErrors();
    var name = document.forms['myForm']["fname"].value;
    if (name.length < 5) {
        seterror("name", "**Length of name is too short");
        returnval = false;
    }
    if (name.length == 0) {
        seterror("name", "**Length of name cannot be zero");
        returnval = false;
    }
    var email = document.forms['myForm']["femail"].value;
    if (email.length > 50) {
        seterror("email", "**Email length is too long ");
        returnval = false;
    }
    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10) {
        seterror("phone", "**Your phone should be at least 10 digits ");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length != 6) {
        seterror("pass", "**Your password should be at least 6 digits");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length != 6) {
        seterror("pass", "**Your password should be at least 6 numbers ");
        returnval = false;
    }
    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password) {
        seterror("cpass", "**Your password and confirm password does not match ");
        returnval = false;
    }

    return returnval;
}