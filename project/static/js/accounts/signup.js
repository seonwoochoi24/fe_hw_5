const inputId = document.getElementById("idInputBox_Signup");
const inputPw = document.getElementById("pwInputBox_Signup");
const inputPwCheck = document.getElementById("pwCheckInputBox_Signup");
const signupButton = document.getElementById("signupButton_Signup");
const warning = document.getElementsByClassName("pwCheckWarning_Signup")[0];

function checkIdInput() {
    return inputId.value.trim().length > 0 ? 1 : 0;
}

function checkPwInput() { 
    const pw = inputPw.value;
    const hasUpper = /[A-Z]/.test(pw);
    const hasLower = /[a-z]/.test(pw);
    const hasNumber = /[0-9]/.test(pw);
    const hasSpecial = /[@!?_-]/.test(pw);
    const isLengthValid = pw.length >= 8;
    
    return (hasUpper && hasLower && hasNumber && hasSpecial && isLengthValid) ? 1 : 0;
}
function checkPwCheckInput() {
    const pw = inputPw.value;
    const pwCheck = inputPwCheck.value;
    const warning = document.querySelector(".pwCheckWarning_Signup"); // 또는 getElementsByClassName()[0]

    if (pw === pwCheck && pwCheck.length > 0) {
        warning.style.display = "none";
        return 1;
    } else if (pwCheck.length > 0) {
        warning.style.display = "block";
        return 0;
    } else {
        warning.style.display = "none";
        return 0;
    }
}

function checkInputs() {
    const isIdValid = checkIdInput();
    const isPwValid = checkPwInput();
    const isPwCheckValid = checkPwCheckInput();

    if (isIdValid && isPwValid && isPwCheckValid) {
        signupButton.disabled = false;
        signupButton.style.backgroundColor = "#5E0080";  // 보라색
        signupButton.style.color = "#fff";
        signupButton.style.cursor = "pointer";
    } else {
        signupButton.disabled = true;
        signupButton.style.backgroundColor = "#E2E2E2";  // 회색
        signupButton.style.color = "#999";
        signupButton.style.cursor = "default";
    }
}


inputId.addEventListener("input", checkInputs);
inputPw.addEventListener("input", checkInputs);
inputPwCheck.addEventListener("input", checkInputs);
