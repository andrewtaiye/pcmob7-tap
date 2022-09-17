import { PROFILE_SCREEN } from "../constants";
import ProfileScreenHome from "../screens/ProfileScreenHome";
import ProfileScreenAdd from "../screens/ProfileScreenAdd";
import ProfileScreenUpdate from "../screens/ProfileScreenUpdate";

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName={PROFILE_SCREEN.Home}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={PROFILE_SCREEN.Home} component={ProfileScreenHome} />
      <Stack.Screen name={PROFILE_SCREEN.Add} component={ProfileScreenAdd} />
      <Stack.Screen
        name={PROFILE_SCREEN.Update}
        component={ProfileScreenUpdate}
      />
    </Stack.Navigator>
  );
}
