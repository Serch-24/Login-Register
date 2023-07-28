
import { signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./firebase.js";

const logout = document.getElementById('logout');

logout.addEventListener("click", async ()=>{
    await signOut(auth)
})