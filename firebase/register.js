import { auth, db } from "/.conflig.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const registerBtn = document.getElementById("register-btn");
const errorMessage = document.getElementById("error-message");

