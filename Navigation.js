import React from "react";
import 'react-native-gesture-handler';

import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from "@react-navigation/stack";

//Import Sreens
import { InitialScreen } from "./screens/InitialScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { RegisterScreen } from "./screens/RegisterScreen";

const Stack = createStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="initial"
            >
                <Stack.Screen
                    name='initial'
                    component={InitialScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='login'
                    component={LoginScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="register"
                    component={RegisterScreen}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export { Navigation }