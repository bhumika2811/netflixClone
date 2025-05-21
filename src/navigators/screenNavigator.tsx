import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomNavigation from './bottomNavigator';
import User from '../screens/users'
import NetflixLoginPage from '../screens/loginPage';
import SignUp from '../screens/signUp';
const Stack = createNativeStackNavigator();
const ScreenNavigator = () => {
    return (

        <Stack.Navigator initialRouteName='SignUp' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name="Login" component={NetflixLoginPage} />
            <Stack.Screen name="User" component={User}
            />
            <Stack.Screen name="MyHome" component={BottomNavigation} />
        </Stack.Navigator>

    );
}

export default ScreenNavigator;
