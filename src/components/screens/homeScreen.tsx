import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { PaperProvider } from "react-native-paper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { theme } from "../styles/theme";
import CustomDrawer from "../navs/customDrawer";
import Dashboard from "./dashboard";
import ProfileScreen from "./profileScreen";
import NotificationScreen from "./notificationScreen";
import SettingScreen from "./settingScreen";

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <PaperProvider theme={theme}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: theme.colors.primary,
          drawerActiveTintColor: theme.colors.white,
          drawerInactiveTintColor: theme.colors.primary,
          drawerLabelStyle: {
            marginLeft: -10,
            fontSize: theme.fontSize.small,
            padding: 5,
          },
          drawerItemStyle: {
            marginLeft: 0,
            marginRight: 0,
            borderRadius: 0,
            paddingLeft: 10,
            marginTop: -5,
          },
        }}
      >
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="home"
                size={22}
                color={
                  focused ? theme.colors.lightPrimary : theme.colors.primary
                }
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="person"
                size={22}
                color={
                  focused
                    ? theme.colors.lightPrimary
                    : theme.colors.lightPrimary
                }
              />
            ),
            title: "My Profile",
          }}
        />
        <Drawer.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="notifications"
                size={22}
                color={
                  focused
                    ? theme.colors.lightPrimary
                    : theme.colors.lightPrimary
                }
              />
            ),
            title: "Notifications",
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="settings"
                size={22}
                color={
                  focused
                    ? theme.colors.lightPrimary
                    : theme.colors.lightPrimary
                }
              />
            ),
            title: "Settings",
          }}
        />
      </Drawer.Navigator>
    </PaperProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
