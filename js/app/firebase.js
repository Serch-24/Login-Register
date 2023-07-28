
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"

  const firebaseConfig = {
    apiKey: "AIzaSyBp4hDWtMdMaKHXU2m4ulxEhdDqoL1rnYI",
    authDomain: "groovy-cider-392100.firebaseapp.com",
    projectId: "groovy-cider-392100",
    storageBucket: "groovy-cider-392100.appspot.com",
    messagingSenderId: "865363744790",
    appId: "1:865363744790:web:ad9064db2a76706cde7d37",
    measurementId: "G-9DTP49JW7H"
  };

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);