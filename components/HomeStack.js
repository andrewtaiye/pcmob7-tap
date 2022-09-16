import { ASSESSMENTS_STACK, PROFILE_STACK } from "../constants";
import AssessmentStack from "../components/AssessmentStack";
import ProfileStack from "../components/ProfileStack";

import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName={ASSESSMENTS_STACK}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name={ASSESSMENTS_STACK}
        component={AssessmentStack}
        options={{
          tabBarLabel: "ASSESSMENTS",
          tabBarLabelStyle: { color: "white", fontSize: 24 },
          tabBarIconStyle: { display: "none" },
          tabBarStyle: {
            backgroundColor: "#63A4FF",
            borderTopWidth: 1,
            borderTopColor: "#004BA0",
          },
        }}
      />
      <Tab.Screen
        name={PROFILE_STACK}
        component={ProfileStack}
        options={{
          tabBarLabel: "PROFILE",
          tabBarLabelStyle: { color: "white", fontSize: 24 },
          tabBarIconStyle: { display: "none" },
          tabBarStyle: {
            backgroundColor: "#63A4FF",
            borderTopWidth: 1,
            borderTopColor: "#004BA0",
          },
        }}
      />
    </Tab.Navigator>
  );
}
