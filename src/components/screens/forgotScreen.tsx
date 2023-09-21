import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { theme } from "../styles/theme";
import CustomInput from "../utils/customInput";

const ForgotScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cellphone, setCellphone] = useState<string>("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 20, alignItems: "center" }}>
        <Text
          style={{
            color: theme.colors.primary,
            fontSize: theme.fontSize.xLarge,
            fontWeight: "bold",
            marginVertical: 30,
          }}
        >
          Forgot Password
        </Text>
        <Text
          style={{
            fontSize: theme.fontSize.large,
            maxWidth: "60%",
            textAlign: "center",
          }}
        >
          Forgot password?Reset it here!
        </Text>
      </View>
      <ScrollView style={{ marginVertical: 15, padding: 20 }}>
        <CustomInput
          placeholder="Cellphone"
          value={cellphone}
          setValue={setCellphone}
          secureTextEntry={false}
          keyboardType={"numeric"}
        />

        <View style={{ marginVertical: 10 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("NewPassword")}
            style={styles.signInButton}
          >
            <Text style={styles.signInText}>Reset</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginVertical: 10 }}>
          <TouchableOpacity
            style={[
              styles.signInButton,
              {
                backgroundColor: theme.colors.white,
                borderColor: theme.colors.lightPrimary,
                borderWidth: 1,
              },
            ]}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.signUpText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textInput: {
    fontSize: theme.fontSize.small,
    padding: 15,
    backgroundColor: theme.colors.lightPrimary,
    borderRadius: 20,
    marginVertical: 10,
  },
  forgotText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.primary,
    alignSelf: "flex-end",
    fontWeight: "bold",
  },
  signInButton: {
    backgroundColor: theme.colors.primary,
    padding: 20,
    marginVertical: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  signInText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
  signUpText: {
    fontSize: theme.fontSize.small,
    color: theme.colors.primary,
    textAlign: "center",
    fontWeight: "bold",
  },
});
