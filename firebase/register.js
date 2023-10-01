import { auth } from "./config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const usernameElm = document.getElementById("username");
const passwordElm = document.getElementById("password");
const registerBtn = document.getElementById("register-btn");
const formElm = document.getElementById("signup-form")
const handleRegister = () => {
    const email = usernameElm.value;
    const password = passwordElm.value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(user.email);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode);
        });
};
formElm.addEventListener("submit", handleRegister)
// registerBtn.addEventListener("click", handleRegister);

// import { auth } from "config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const usernameelm = document.getElementById("username");
const passwordelm = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const formelm = document.getElementById("signin-form")
const handleLogin = () => {
    const email = usernameElm.value;
    const password = passwordElm.value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location = './index.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
        });
};

formElm.addEventListener("submit", handleLogin);