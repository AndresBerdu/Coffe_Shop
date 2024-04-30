import React from "react";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import 'react-native-gesture-handler';

//Import Sreens
import { HomeScreen } from "../screens/HomeScreen"; 
import { ShopScreen } from "../screens/ShopScreen"; 
import { FavoriteScreen } from "../screens/FavoriteScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return(
        <Tab.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
                tabBarActiveTintColor: '#FFFFFF',
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarStyle: style.TabBarStyle
            }}
        >
            <Tab.Screen 
                name='HomeScreen' 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome6 name='house-chimney' color={color} size={30}/>
                    ),
                    headerShown: false,
                    tabBarInactiveTintColor: '#DB5F03'
                }}
            />

            <Tab.Screen
                name='FavoriteScreen'
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome6 name='heart' color={color} size={30}/>
                    ),
                    headerShown: false,
                    tabBarInactiveTintColor: '#DB5F03'
                }}
            />

            <Tab.Screen 
                name='ShopScreen' 
                component={ShopScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome6 name='cart-shopping' color={color} size={30}/>
                    ),
                    headerShown: false,
                    tabBarInactiveTintColor: '#DB5F03'
                }}
            />
            
        </Tab.Navigator>
    )
}

const style = StyleSheet.create ({
    TabBarStyle: {
        backgroundColor: '#F58A00',
        height: 80,
        position: 'absolute',
        borderTopWidth: 0,
        elevation: 0
    }
})

export { TabNavigation }