// services/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAG7u1qxqA57wupZo5Eaexo-PKUy3FuUdA",
  authDomain: "zendo-90dfb.firebaseapp.com",
  projectId: "zendo-90dfb",
  storageBucket: "zendo-90dfb.firebasestorage.app",
  messagingSenderId: "1042023186776",
  appId: "1:1042023186776:web:3cd16cb15c84cf3687e52d",
  measurementId: "G-BFK9SL0JHK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
