import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenName } from "./Routes";
import GetStarted from "../screen/getstarted";
import Home from "../screen/home";

export default function Route() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={ScreenName.GetStarted}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={ScreenName.GetStarted} component={GetStarted} />
      <Stack.Screen name={ScreenName.Home} component={Home} />
    </Stack.Navigator>
  );
}
