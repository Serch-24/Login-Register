
    export function moveItemsMobile() {

      const $containerSocialLogin = document.querySelector(".login--item div");
      const $containerLoginForm = document.querySelector(".login--form form");
      const $recoverPass = document.querySelector(".login--form_container_a");

      const $containerRegisterForm = document.querySelector(".register--form form");
      const $socialRegister = document.querySelector(".register--social");
      const $containerSocialRegister = document.querySelector(".register div");
      
      const $socialLogin = document.querySelector(".login--social");
      
      if (window.innerWidth <= 550) {

        $containerLoginForm.insertBefore($recoverPass, $containerLoginForm.children[2]);
        $containerLoginForm.insertBefore($socialLogin, $containerLoginForm.children[4]);

        $containerRegisterForm.insertBefore($socialRegister, $containerRegisterForm.children[5]);

      } else {
        
        $containerLoginForm.appendChild($recoverPass);
        $containerSocialLogin.appendChild($socialLogin);

        $containerSocialRegister.appendChild($socialRegister);

      }
    }