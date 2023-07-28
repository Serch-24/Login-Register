
//media quieries de celulares
import {moveItemsMobile} from "./media_queries-mobile.js";

//lógica para el inicio de sesión y registro de usuarios
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./app/firebase.js";
import "./app/registerForm.js";
import "./app/logInForm.js";
import "./app/googleLogin.js";
import "./app/facebookLogin.js";
import "./app/twitterLogin.js";
import "./app/logout.js";

//validaciones de campos
import {lengthPass, hideErrors, confirmPassword} from "./validations.js";

//animaciones
import {moveLoginContainer, moveLoginContainerMobile} from "./animation_login.js";
import {moveRegisterContainer, moveRegisterContainerMobile} from "./animation_register.js";

//mostrar contraseña
import {showpass} from "./show_password.js";

const logout = document.getElementById('logout'); 

//Gotón de cerrar sesión
onAuthStateChanged(auth, async (user)=>{
    if (user) {
       logout.style.display = "block";
    } else{
       logout.style.display = "none";
    }
})

//Efecto de mostrar/ocultar constraseña
const $eye = document.querySelector(".show_pass");
const $eye_register = document.querySelector(".show_pass_register");

$eye.addEventListener("click", showpass);
$eye_register.addEventListener("click", showpass);

//validaciones de campos
const $passInputRegister = document.getElementById('password-register');
const $confirmPassInputRegister = document.getElementById('confirm_password-register');

$passInputRegister.addEventListener('input', lengthPass);
$passInputRegister.addEventListener('input', confirmPassword);
$confirmPassInputRegister.addEventListener('input', confirmPassword);

const $emailInputLogin = document.getElementById('email-login');
$emailInputLogin.addEventListener('input', () => hideErrors($emailInputLogin.nextElementSibling));

const $passInputLogin = document.getElementById('password-login');
$passInputLogin.addEventListener('input', () => hideErrors($eye.nextElementSibling));

const $emailInputRegister = document.getElementById('email-register');
$emailInputRegister.addEventListener('input', () => hideErrors($emailInputRegister.nextElementSibling));


//animación para la interfaz de escritorio
const $buttonRegister = document.querySelector('.welcome--item_button_register');
const $buttonLogin = document.querySelector('.welcome_back--item_button_login');

$buttonRegister.addEventListener('click', moveLoginContainer);
$buttonLogin.addEventListener('click', moveRegisterContainer);


//animaciones para la interfaz de celulares
const $mobileButtonRegister = document.querySelector(".login--form_container_register a");
const $mobileButtonLogin = document.querySelector(".register--form_container_login a");

$mobileButtonRegister.addEventListener('click', moveLoginContainerMobile);
$mobileButtonLogin.addEventListener('click', moveRegisterContainerMobile);

document.addEventListener("DOMContentLoaded", moveItemsMobile);
window.addEventListener("resize", moveItemsMobile);

