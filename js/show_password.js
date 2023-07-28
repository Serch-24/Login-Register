
export function showpass() {

    const pass = document.querySelector(".password");
    const eye = document.querySelector(".show_pass");

    if (pass.type === "password") {    

        pass.type = "text";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    }
    else if (pass.type === "text") {

        pass.type = "password";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }

    const pass_register = document.querySelector(".password-register");
    const eye_register = document.querySelector(".show_pass_register");
    
    if (pass_register.type === "password"){

        pass_register.type = "text";
        eye_register.classList.remove("fa-eye");
        eye_register.classList.add("fa-eye-slash");
    } 
    else if (pass_register.type === "text") {

        pass_register.type = "password";
        eye_register.classList.remove("fa-eye-slash");
        eye_register.classList.add("fa-eye");
    }
}