
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./firebase.js";

const loginForm = document.querySelector(".loginForm");

loginForm.addEventListener("submit", async (e) =>{

    e.preventDefault();
    
    const emailLogin = loginForm["email-login"].value;
    const passLogin = loginForm["password-login"].value;

    try {
        
        const userCredentialsLogin = await signInWithEmailAndPassword(auth, emailLogin, passLogin);
        
        Swal.fire({
            title: '¡Bienvenid@ ' + userCredentialsLogin.user.email + '!',
            icon: 'success',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            reverseButtons: true
        })

    } catch (error) {

        let $errorEmailLogin;
        let $errorPassLogin;

        if ($errorEmailLogin) {
            $errorEmailLogin.style.display = "none";
    
        } else if ($errorPassLogin){
            $errorPassLogin.style.display = "none";
        }

        let loginError = error.code;

        $errorEmailLogin = document.querySelector(".login--error_email");
        $errorPassLogin = document.querySelector(".login--error_pass");

        switch (loginError) {
            case "auth/user-not-found":
                
                $errorEmailLogin.style.display = "block";
                $errorEmailLogin.textContent = "Este correo no está registrado";

                break;

            case "auth/wrong-password":
            
                $errorPassLogin.style.display = "block";
                $errorPassLogin.textContent = "Contraseña incorrecta";
        
                break;
        
            default: alert("Error al iniciar sesión, revise los campos e intente nuevamente");
                break;
        }
    }
})