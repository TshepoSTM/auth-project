import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import FlashMessage, {
  showMessage,
  hideMessage,
} from "react-native-flash-message";
import { theme } from "../styles/theme";
import CustomInput from "../utils/customInput";
import CustomRowInput from "../utils/customRowInput";
import { UserContext } from "../../../context/userContext";
import NavHeader from "../navs/navHeader";

const NotificationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <NavHeader navigation={navigation} />
      <ScrollView style={styles.body}>
        <View style={styles.welcome}>
          <View
            style={{
              justifyContent: "space-between",
              margin: 0,
            }}
          >
            <Text
              style={{ fontSize: theme.fontSize.small, fontWeight: "900" }}
            ></Text>
          </View>
        </View>
        <View style={styles.bodyContents}>
          <Text>Notifications</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    margin: 10,
    marginVertical: 5,
  },
  welcome: {
    borderWidth: 0,
    borderColor: theme.colors.lightPrimary,
    padding: 0,
  },
  bodyContents: {
    justifyContent: "center",
    alignItems: "center",
  },
});
