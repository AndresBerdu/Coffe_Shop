import React from "react";
import { StyleSheet } from "react-native";
import { TabNavigation } from "./TabNavigation";
import 'react-native-gesture-handler';

import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from "@react-navigation/stack";

import FirebaseStage from "../context/firebase/firebaseStage";

//Import Sreens
import { InitialScreen } from "../screens/InitialScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { DetailsCoffeeScreen } from "../screens/DetailsCoffeeScreen";

const Stack = createStackNavigator();

const Navigation = () => {
    return(
        <FirebaseStage>
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
                    <Stack.Screen
                        name="DetailsCoffeeScreen"
                        component={DetailsCoffeeScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </FirebaseStage>
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