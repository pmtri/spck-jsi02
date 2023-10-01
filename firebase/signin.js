import { auth } from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const usernameElm = document.getElementById("username");
const passwordElm = document.getElementById("password");
const formElm = document.getElementById("signin-form")
const handleLogin = (e) => {
    e.preventDefault();
    const email = usernameElm.value;
    const password = passwordElm.value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location = "index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
        });
};

formElm.addEventListener("submit", handleLogin);