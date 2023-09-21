import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/homeScreen";
import ProfileScreen from "../screens/profileScreen";
import NotificationScreen from "../screens/notificationScreen";
import SettingScreen from "../screens/settingScreen";

const homeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <homeStack.Navigator screenOptions={{ headerShown: false }}>
      <homeStack.Screen name="Home" component={HomeScreen} />
      <homeStack.Screen name="Profile" component={ProfileScreen} />
      <homeStack.Screen name="Notification" component={NotificationScreen} />
      <homeStack.Screen name="Setting" component={SettingScreen} />
    </homeStack.Navigator>
  );
}
