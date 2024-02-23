// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-hWwNdVn7GqLEEgzVgmKzcWHh4aZuQX4",
    authDomain: "netflixgpt-46fd8.firebaseapp.com",
    projectId: "netflixgpt-46fd8",
    storageBucket: "netflixgpt-46fd8.appspot.com",
    messagingSenderId: "958356112095",
    appId: "1:958356112095:web:ecc891555f9cbf6ebe5f6a",
    measurementId: "G-XVZ0YDCGYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();