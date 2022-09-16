import { ASSESSMENTS_SCREEN } from "../constants";
import AssessmentScreenHome from "../screens/AssessmentScreenHome";
import AssessmentScreenAdd from "../screens/AssessmentScreenAdd";
import AssessmentScreenUpdate from "../screens/AssessmentScreenUpdate";

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function AssessmentStack() {
  return (
    <Stack.Navigator
      initialRouteName={ASSESSMENTS_SCREEN.Home}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={ASSESSMENTS_SCREEN.Home}
        component={AssessmentScreenHome}
      />
      {/* <Stack.Screen
        name={ASSESSMENTS_SCREEN.Add}
        component={AssessmentScreenAdd}
      />
      <Stack.Screen
        name={ASSESSMENTS_SCREEN.Update}
        component={AssessmentScreenUpdate}
      /> */}
    </Stack.Navigator>
  );
}
