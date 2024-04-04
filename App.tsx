
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import ScreenNavigator from './src/navigators/screenNavigator';
import { StatusBar } from 'react-native';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    StatusBar.setBackgroundColor("black")
  }, []);
  return (
    <NavigationContainer>
      <ScreenNavigator />
    </NavigationContainer>
  )
}
export default App