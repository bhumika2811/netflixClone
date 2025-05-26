import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomNavigation from './bottomNavigator';
import User from '../screens/users';
import NetflixLoginPage from '../screens/loginPage';
import SignUp from '../screens/signUp';
import EmailVerification from '../screens/emailVerification';
import { useAuth } from '../context/Authprovider';


const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {
  const { user } = useAuth();


  if (user) {
    return (
      <Stack.Navigator
      id={undefined}
        initialRouteName="User"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="MyHome" component={BottomNavigation} />
      </Stack.Navigator>
    );
  }

 
  return (
    <Stack.Navigator
    id={undefined}
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="EmailVerification" component={EmailVerification} />
      <Stack.Screen name="Login" component={NetflixLoginPage} />
    </Stack.Navigator>
  );
};

export default ScreenNavigator;
