
function formValidate () {

    const yourEmail = document.getElementById("ema").value;
    const yourPass = document.getElementById("passs").value;

    let error = document.getElementById("error");
    let text =""; 


    if (yourEmail.length < 10) {
        text = "Please Enter Valid Email";
        error.innerHTML= text;
        return false;
    }
    else if (yourPass.length < 8) {
        text = "Please Enter Valid Password";
        error.innerHTML= text;
        return false;
    }
    else {
        return true;
    }

}









