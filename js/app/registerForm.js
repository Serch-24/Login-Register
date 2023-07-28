
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./firebase.js";

const $registerForm = document.querySelector(".registerForm");

$registerForm.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const registerName = $registerForm['name'].value;
    const registerEmail = $registerForm['email-register'].value;
    const registerPass = $registerForm['confirm_password-register'].value;

    try {

        const userCredentialsRegister = await createUserWithEmailAndPassword(auth, registerEmail, registerPass);
        
        userCredentialsRegister.user.displayName = registerName;

        Swal.fire({
            title: '¡Bienvenid@ ' + userCredentialsRegister.user.displayName + '!',
            icon: 'success',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            reverseButtons: true
        })
        
    } catch (error) {

        let $errorEmailRegister;
        let $errorPassRegister;

        if ($errorEmailRegister) {
            $errorEmail.style.display = "none";
    
        } else if ($errorPassRegister){
            $errorPass.style.display = "none";
        }

        let registerError = error.code;
        $errorEmailRegister = document.querySelector(".register--error_email");
        $errorPassRegister = document.querySelector(".register--error_pass");

        switch (registerError) {
            case "auth/invalid-email":

                $errorEmailRegister.style.display = "block";
                $errorEmailRegister.textContent = "Correo inválido";
                
                break;

            case "auth/weak-password":
                
                $errorPassRegister.style.display = "block";
                $errorPassRegister.textContent = "La contraseña debe contener al menos 6 carácteres";

                break;

            case "auth/email-already-in-use":

                $errorEmailRegister.style.display = "block";
                $errorEmailRegister.textContent = "El correo ya está en uso";

                break;
        
            default: alert("Error al registrarse, revise los campos e intente nuevamente");
                    console.log(error);
                    
                break;
        }   
    }
})