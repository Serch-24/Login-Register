
import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./firebase.js";

const facebookBtnLogin = document.querySelector(".login-facebook");
const facebookBtnRegister = document.querySelector(".register-facebook");

facebookBtnLogin.addEventListener("click", logInFacebook);
facebookBtnRegister.addEventListener("click", logInFacebook)


async function logInFacebook(){

    const provider = new FacebookAuthProvider();

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
        console.log(error);
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