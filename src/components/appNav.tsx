import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import FlashMessage from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "./styles/theme";
import HomeStackScreen from "../components/stackScreens/homeStackScreen";
import RootStackScreen from "../components/stackScreens/rootStackScreen";
import { UserContext } from "../../context/userContext";

const AppNav = () => {
  const { isLoading, userToken } = useContext(UserContext);

  if (!isLoading) {
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>;
  }
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.lightPrimary}
        barStyle={"dark-content"}
        showHideTransition={"slide"}
      />
      {userToken !== null ? <HomeStackScreen /> : <RootStackScreen />}
      <FlashMessage position="bottom" />
    </NavigationContainer>
  );
};

export default AppNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
