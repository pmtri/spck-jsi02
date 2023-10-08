import { auth } from "./config.js";
import { createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const usernameElm = document.getElementById("username-signup");
const emailElm = document.getElementById("email-signup");
const passwordElm = document.getElementById("password-signup");
const formElm = document.getElementById("signup-form")
const handleRegister = (e) => {
    e.preventDefault()
    const username = usernameElm.value;
    const email = emailElm.value;
    const password = passwordElm.value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            updateProfile(auth.currentUser, {
                displayName: username,
            })
                .then(() => {
                    window.location = "signin.html";
                })
                .catch((error) => {
                    alert(error.code);
                });
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode);
        });
};
formElm.addEventListener("submit", handleRegister)
// registerBtn.addEventListener("click", handleRegister);


