// import './firebaseConfig'
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import ScreenNavigator from './src/navigators/screenNavigator';
import { StatusBar, Platform } from 'react-native';
import { initializeApp, getApps } from 'firebase/app';

// ß
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
