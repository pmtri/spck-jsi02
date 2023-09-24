import { auth, db } from "/.conflig.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const registerBtn = document.getElementById("register-btn");
const errorMessage = document.getElementById("error-message");




const firebaseConfig = {
    apiKey: "AIzaSyBgAdx3GicNrTne-OyR7TBooxmH76djYo4",
    authDomain: "fir-661a4.firebaseapp.com",
    databaseURL: "https://fir-661a4-default-rtdb.firebaseio.com",
    projectId: "fir-661a4",
    storageBucket: "fir-661a4.appspot.com",
    messagingSenderId: "994175467030",
    appId: "1:994175467030:web:f5d0d267899bfe1d62bf37",
    measurementId: "G-1ZFF98H1J4"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {

            document.write("You are Signed Up")
            console.log(result)

        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)

        });
}

const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {

            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}

