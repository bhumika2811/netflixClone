import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import ScreenNavigator from './src/navigators/screenNavigator';
import { StatusBar, Platform } from 'react-native';
import { AuthProvider } from './src/context/Authprovider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor("black");
    }
  }, []);

  return (
    <AuthProvider>
      <GestureHandlerRootView>

      <NavigationContainer >
        <ScreenNavigator />
      </NavigationContainer>
      </GestureHandlerRootView>
    </AuthProvider>
  );
};

export default App;
