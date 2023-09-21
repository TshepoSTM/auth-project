import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/signInScreen";
import SignUpScreen from "../screens/signUpScreen";
import Dashboard from "../screens/dashboard";
import ForgotScreen from "../screens/forgotScreen";
import NewPasswordScreen from "../screens/newPasswordScreen";

const rootStack = createNativeStackNavigator();

const RootStackScreen = () => {
  return (
    <rootStack.Navigator screenOptions={{ headerShown: false }}>
      <rootStack.Screen name="SignIn" component={SignInScreen} />
      <rootStack.Screen name="SignUp" component={SignUpScreen} />
      <rootStack.Screen name="Forgot" component={ForgotScreen} />
      <rootStack.Screen name="NewPassword" component={NewPasswordScreen} />
    </rootStack.Navigator>
  );
};

export default RootStackScreen;
