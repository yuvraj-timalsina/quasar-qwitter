import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcXP4tNfOyYz7hf0Nn9b76zwxbEFak0ZE",
  authDomain: "quasar-qwitter-2022.firebaseapp.com",
  projectId: "quasar-qwitter-2022",
  storageBucket: "quasar-qwitter-2022.appspot.com",
  messagingSenderId: "677559910192",
  appId: "1:677559910192:web:4d7ede00e01c16337cd2f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export {db}
