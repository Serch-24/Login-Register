
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./firebase.js";

const googleBtnLogin = document.querySelector(".login-google");
const googleBtnRegister = document.querySelector(".register-google");

googleBtnLogin.addEventListener("click", logInGoogle);
googleBtnRegister.addEventListener("click", logInGoogle)

async function logInGoogle(){

    const provider = new GoogleAuthProvider();

    try {
        const userCredentialsLogin = await signInWithPopup(auth, provider);
        
        Swal.fire({
            title: '¡Bienvenido ' + userCredentialsLogin.user.displayName + '!',
            icon: 'success',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            reverseButtons: true
        })

    } catch (error) {
        Swal.fire({
            title: 'Ha ocurrido un error, intente nuevamente o pruebe otra forma',
            icon: 'error',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            reverseButtons: true
        })
    }
}