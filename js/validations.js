
export function lengthPass() {

    const passRegister = document.getElementById('password-register').value;
    const errorPass = document.querySelector('.register--error_pass');
    
    if (passRegister.length >= 6) {
        errorPass.style.display = 'none'; 
    } else {
        errorPass.style.display = 'block'; 
    }
}

export function confirmPassword() {
    const passRegister = document.getElementById('password-register').value;
    const confirmPassRegister = document.getElementById('confirm_password-register').value;
    const btnRegister = document.getElementById('register--btn');

    const errorConfirmPass = document.querySelector('.register--error_confirm-pass');

    if (passRegister === confirmPassRegister) {
        btnRegister.disabled = false;
        errorConfirmPass.style.display = "none";
    } else {
        btnRegister.disabled = true;
        errorConfirmPass.style.display = "block";
        errorConfirmPass.textContent = "Las contraseñas no coinciden"
    }
}

export function hideErrors(spanError) {

    spanError.style.display = "none";

}