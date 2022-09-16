import { AUTH_SCREEN, HOME_STACK } from "./constants";
import AuthScreen from "./screens/AuthScreen";
import HomeStack from "./components/HomeStack";

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={AUTH_SCREEN}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={AUTH_SCREEN} component={AuthScreen} />
        <Stack.Screen name={HOME_STACK} component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
