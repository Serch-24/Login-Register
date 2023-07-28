 
//Constantes del contenedor de bienvenida
const welcomeContainer = document.querySelector('.welcome');
const welcomeItem = document.querySelector('.welcome--item');
const welcomeBackItem = document.querySelector('.welcome_back--item');

//Constantes del contenedor de formularios
const loginContainer = document.querySelector('.login');
const loginItem = document.querySelector('.login--item');
const registerItem = document.querySelector('.register');

 //animación para la interfaz de escritorio
 export function moveRegisterContainer() {

    welcomeBackItem.classList.add('move_welcomeBack_items--out');
    welcomeBackItem.classList.remove('move_welcomeBack_items--in');

    setTimeout(()=>{

        welcomeContainer.classList.add('move_welcome_container--right');
        welcomeContainer.classList.remove('move_welcome_container--left');

        loginContainer.classList.add('move_login_container--right');
        loginContainer.classList.remove('move_login_container');

        registerItem.classList.add('move_register_items--out');
        
        
    },100);

    setTimeout(()=>{

        registerItem.classList.remove("move_register_items--in");
        welcomeBackItem.classList.remove('move_welcomeBack_items--out');

        welcomeBackItem.display = 'none';
        registerItem.display = 'none';

        welcomeItem.style.display = "block";
        loginItem.style.display = "block";

        loginItem.classList.add('move_login--in');
        loginItem.classList.remove('move_login--out');

        welcomeItem.classList.remove('move_welcome--items--out');
        welcomeItem.classList.add('move_welcome--items--in');
        
    }, 500);
}

//animación para la interfaz de celulares
export function moveRegisterContainerMobile(){

    welcomeBackItem.classList.add('move_welcomeBack_items--out');
    welcomeBackItem.classList.remove('move_welcomeBack_items--in');

    setTimeout(()=>{

        welcomeContainer.classList.add('move_bg_welcome_container--login');
        welcomeContainer.classList.remove('move_bg_welcome_container--register');

        registerItem.classList.add('move_register_items--out');
        
        
    },100);

    setTimeout(()=>{

        registerItem.classList.remove("move_register_items--in");
        welcomeBackItem.classList.remove('move_welcomeBack_items--out');

        welcomeBackItem.display = 'none';
        registerItem.display = 'none';

        welcomeItem.style.display = "block";
        loginItem.style.display = "block";

        loginItem.classList.add('move_login--in');
        loginItem.classList.remove('move_login--out');

        welcomeItem.classList.remove('move_welcome--items--out');
        welcomeItem.classList.add('move_welcome--items--in');
        
    }, 500);
}

