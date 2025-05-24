import  firebase  from '@react-native-firebase/app';
import { initializeApp, getApps } from 'firebase/app';
import { Platform } from 'react-native';

const firebaseConfigAndroid = {
  apiKey: "AIzaSyD8t74kQTv2H3MtHiGN-rAAyVyCjTLff1s",
  authDomain: "netflix-clone-efd04.firebaseapp.com",
  projectId: "netflix-clone-efd04",
  storageBucket: "netflix-clone-efd04.appspot.com",
  messagingSenderId: "746719587048",
  appId: "1:746719587048:android:3d12bc2e0d064dfcceb75d",
};

const firebaseConfigIOS = {
  apiKey: "AIzaSyD8t74kQTv2H3MtHiGN-rAAyVyCjTLff1s",
  authDomain: "netflix-clone-efd04.firebaseapp.com",
  projectId: "netflix-clone-efd04",
  storageBucket: "netflix-clone-efd04.appspot.com",
  messagingSenderId: "746719587048",
  appId: "1:746719587048:ios:310baa172fcffcc6ceb75d", 
};

const firebaseConfig = Platform.OS === 'ios' ? firebaseConfigIOS : firebaseConfigAndroid;
// console.log({firebaseConfig});  

if (getApps().length === 0) {
  const app = firebase.initializeApp(firebaseConfig);
  console.log("Firebase initialized:", app.name);
} else {
  console.log("Firebase already initialized");
}