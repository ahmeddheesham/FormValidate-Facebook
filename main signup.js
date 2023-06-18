
function signupvalidate () {

    const firstName = document.getElementById("fin").value;
    const familyName = document.getElementById("fan").value;
    const yourEmail = document.getElementById("emaill").value;
    const yourPassword = document.getElementById("passss").value;


    let error = document.getElementById("error");
    let text = "";

    if (firstName.length < 4) {
        text = "Please Enter Valid First Name";
        error.innerHTML = text;
        return false;
    }
    else if (familyName.length < 4) {
        text = "Please Enter Valid Family Name";
        error.innerHTML = text;
        return false;
    }
    else if (yourEmail.length < 10) {
        text = "Please Enter Valid Email";
        error.innerHTML = text;
        return false;
    }
    else if (yourPassword.length < 8) {
        text = "Please Enter Valid Password"
        error.innerHTML = text;
        return false;
    }
    else {
        alert (" Thank your for signing up");
        return true;
    }

}