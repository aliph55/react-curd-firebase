import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlk9U50zFDRSDr-XEpq3gjgf-83SodkoE",
  authDomain: "fir-auth-yt-c1970.firebaseapp.com",
  projectId: "fir-auth-yt-c1970",
  storageBucket: "fir-auth-yt-c1970.appspot.com",
  messagingSenderId: "1088480607666",
  appId: "1:1088480607666:web:9205c6907a006ff59a38ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
