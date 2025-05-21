// src/config/firebaseConfig.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8t74kQTv2H3MtHiGN-rAAyVyCjTLff1s",
  authDomain: "netflix-clone-efd04.firebaseapp.com",
  projectId: "netflix-clone-efd04",
  storageBucket: "netflix-clone-efd04.appspot.com",
  messagingSenderId: "746719587048",
  appId: "1:746719587048:android:3d12bc2e0d064dfcceb75d",
};

// Initialize Firebase only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Export auth instance
// const auth = getAuth(app);

export default app;
