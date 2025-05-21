import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import ScreenNavigator from './src/navigators/screenNavigator';
import { StatusBar, Platform } from 'react-native';
import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD8t74kQTv2H3MtHiGN-rAAyVyCjTLff1s",
  authDomain: "netflix-clone-efd04.firebaseapp.com",
  projectId: "netflix-clone-efd04",
  storageBucket: "netflix-clone-efd04.appspot.com",
  messagingSenderId: "746719587048",
  appId: "1:746719587048:android:3d12bc2e0d064dfcceb75d",
};

if (getApps().length === 0) {
  const app = initializeApp(firebaseConfig);
  console.log("Firebase initialized:", app.name);  // should log '[DEFAULT]'
} else {
  console.log("Firebase already initialized");
}

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor("black");
    }
  }, []);

  return (
    <NavigationContainer>
      <ScreenNavigator />
    </NavigationContainer>
  );
};

export default App;
