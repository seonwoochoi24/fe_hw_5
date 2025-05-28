/* login page - JS */

const inputId=document.getElementById("idInputBox_Login");
const inputPw=document.getElementById("pwInputBox_Login");
const loginButton=document.getElementById("loginButton_Login");
const signupButton=document.getElementById("signupButton_Login");

function checkInputs(){
    const idFilled=inputId.value.trim().length>0;
    const pwFilled=inputPw.value.trim().length>0;
    if(idFilled && pwFilled){
        loginButton.disabled=false;
        loginButton.style.backgroundColor = "#5e0080";
        loginButton.style.color="#FFF";
        loginButton.style.cursor = "pointer";   
    }
    else{
        loginButton.disabled=true;
        loginButton.style.backgroundColor = "#E2E2E2";
        loginButton.style.color="#999";
        loginButton.style.cursor = "default";  
    }
}

function moveToSignupPage(){
    location.href = "../signup/";
}


inputId.addEventListener("input", checkInputs);
inputPw.addEventListener("input", checkInputs);
signupButton.addEventListener('click', moveToSignupPage);