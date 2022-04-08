import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwm12kgiNUWhMW4f3OAfWOC3Bv3x0R5wE",
  authDomain: "chipapur-landing-page.firebaseapp.com",
  projectId: "chipapur-landing-page",
  storageBucket: "chipapur-landing-page.appspot.com",
  messagingSenderId: "738331523276",
  appId: "1:738331523276:web:669b4259b98054ce6eaa69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;