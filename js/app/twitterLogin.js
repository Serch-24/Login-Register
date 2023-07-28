
import { TwitterAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./firebase.js";

const twitterBtnLogin = document.querySelector(".login-twitter");
const twitterBtnRegister = document.querySelector(".register-twitter");

twitterBtnLogin.addEventListener("click", logInTwitter);
twitterBtnRegister.addEventListener("click", logInTwitter)


async function logInTwitter(){

    const provider = new TwitterAuthProvider();

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