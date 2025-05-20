import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/home';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import MySearch from '../screens/search'
import { colors } from '../constants/colors';
import Notifications from '../screens/notifications';
import Menu from '../screens/menu'
import Downloads from '../screens/downloads';
const MyTabs = () => {
    const Tab = createBottomTabNavigator();
    return (

        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: colors.bottomTabGrey,
                    paddingTop: 4,
                    justifyContent: "space-between"
                },
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "gray",
                tabBarLabelStyle: {
                    fontSize: 9,
                    marginVertical: 3,

                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon name="home" size={20} color={focused ? "white" : "gray"} />
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={MySearch}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon1 name="search" size={20} color={focused ? "white" : "gray"} />
                    )
                }}
            />
            <Tab.Screen
                name="Coming Soon"
                component={Notifications}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon2 name="animation-play-outline" size={24} color={focused ? "white" : "gray"} />
                    )
                }}
            />
            <Tab.Screen
                name="Downloads"
                component={Downloads}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon1 name="arrow-down" size={20} color={focused ? "white" : "gray"} />
                    )
                }}

            />
            <Tab.Screen
                name="More"
                component={Menu}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon1 name="menu" size={20} color={focused ? "white" : "gray"} />
                    )
                }}

            />
        </Tab.Navigator>

    );
}
export default MyTabs;
