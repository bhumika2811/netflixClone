import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomNavigation from './bottomNavigator';
import User from '../screens/users'
const Stack = createNativeStackNavigator();
const ScreenNavigator = () => {
    return (

        <Stack.Navigator initialRouteName='User' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="User" component={User}
            />
            <Stack.Screen name="MyHome" component={BottomNavigation} />
        </Stack.Navigator>

    );
}

export default ScreenNavigator;
