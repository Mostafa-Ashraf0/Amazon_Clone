import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWOx809Nl2suprZoF-eB-dhWPlEmHtFKg",
  authDomain: "clone-fb354.firebaseapp.com",
  projectId: "clone-fb354",
  storageBucket: "clone-fb354.firebasestorage.app",
  messagingSenderId: "306136094495",
  appId: "1:306136094495:web:a8876ea4b4ecdb9775022a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};