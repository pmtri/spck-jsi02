import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
