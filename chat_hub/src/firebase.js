import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAKMIoTwi_6Ztq_SU2jNq4LGDeyinJ-di4",
    authDomain: "unichat-6700c.firebaseapp.com",
    projectId: "unichat-6700c",
    storageBucket: "unichat-6700c.appspot.com",
    messagingSenderId: "554198908649",
    appId: "1:554198908649:web:a35e717dd99aa60a4bfa78",
    measurementId: "G-NKZYBHZ41K"
}).auth();