import React from "react";
import { StyleSheet } from "react-native";
import { TabNavigation } from "./TabNavigation";
import 'react-native-gesture-handler';

import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from "@react-navigation/stack";

//Import Sreens
import { InitialScreen } from "../screens/InitialScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";

const Stack = createStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='InitialScreen'
            >
                <Stack.Screen
                    name='InitialScreen'
                    component={InitialScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='LoginScreen'
                    component={LoginScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="TabNavigation"
                    component={TabNavigation}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const style = StyleSheet.create ({
    TabBarStyle: {
        height: 80,
        position: 'absolute',
        borderTopWidth: 0,
        elevation: 0
    }
})

export { Navigation }