
//Constantes del contenedor de bienvenida
const welcomeContainer = document.querySelector('.welcome');
const welcomeItem = document.querySelector('.welcome--item');
const welcomeBackItem = document.querySelector('.welcome_back--item');

//Constantes del contenedor de formularios
const loginContainer = document.querySelector('.login');
const loginItem = document.querySelector('.login--item');
const registerItem = document.querySelector('.register');

//animación para la interfaz de escritorio
export function moveLoginContainer() {

    welcomeItem.classList.add('move_welcome--items--out');

    welcomeItem.classList.remove('move_welcome--items--in');
    welcomeContainer.classList.remove('move_welcome_container--right');

    loginContainer.classList.remove('move_login_container--right');
    loginItem.classList.remove('move_login--in');
    registerItem.classList.remove('move_register_items--out');

    setTimeout(()=>{

        welcomeContainer.classList.add('move_welcome_container--left');
        loginContainer.classList.add('move_login_container');
        loginItem.classList.add('move_login--out');
        
    } ,100);

    setTimeout(()=>{

        welcomeItem.style.display = "none";
        loginItem.style.display = "none";

        registerItem.classList.add("move_register_items--in");
        welcomeBackItem.classList.add("move_welcomeBack_items--in");
        
    }, 500);

  }

  //animación para la interfaz de celulares
export function moveLoginContainerMobile(){

    welcomeItem.classList.add('move_welcome--items--out');

    welcomeItem.classList.remove('move_welcome--items--in');
    welcomeContainer.classList.remove('move_bg_welcome_container--login');
    loginContainer.classList.remove('move_login_container--right');
    loginItem.classList.remove('move_login--in');
    registerItem.classList.remove('move_register_items--out');

    setTimeout(()=>{

        welcomeContainer.classList.add('move_bg_welcome_container--register');
        loginItem.classList.add('move_login--out');
        
    } ,100);

    setTimeout(()=>{

        welcomeItem.style.display = "none";
        loginItem.style.display = "none";

        registerItem.classList.add("move_register_items--in");
        welcomeBackItem.classList.add("move_welcomeBack_items--in");
        
    }, 500);
}