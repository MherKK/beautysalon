// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1fuYMxrH1qJkF7nIJdeyeMS6lDdxymTo",
    authDomain: "salon-f671c.firebaseapp.com",
    projectId: "salon-f671c",
    storageBucket: "salon-f671c.appspot.com",
    messagingSenderId: "1057316494534",
    appId: "1:1057316494534:web:53557c9f75eba1ec1d4bc7",
    measurementId: "G-PXC8V61LPB"
};

// Initialize Firebase

firebase.initializeApp({
    databaseURL: "https://salon-f671c-default-rtdb.europe-west1.firebasedatabase.app"
}, firebaseConfig);
export const dataRef = firebase.database();

