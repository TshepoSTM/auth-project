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

const NewPasswordScreen = () => {
  const [verCode, setVerCode] = useState<string>(null);
  const [password, setPassword] = useState<string>("");
  const [conPassword, setConPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
          Create New Password
        </Text>
        <Text
          style={{
            fontSize: theme.fontSize.large,
            maxWidth: "70%",
            textAlign: "center",
          }}
        >
          Verify code and create new password!
        </Text>
      </View>
      <ScrollView style={{ marginVertical: 15, padding: 20 }}>
        <View>
          <CustomInput
            placeholder="Verification Code"
            value={verCode}
            setValue={setVerCode}
            secureTextEntry={false}
            keyboardType={"numeric"}
          />
          <CustomInput
            placeholder="New Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
            keyboardType={"default"}
          />
          <CustomInput
            placeholder="Confirm Password"
            value={conPassword}
            setValue={setConPassword}
            secureTextEntry={true}
            keyboardType={"default"}
          />
          <View style={{ marginVertical: 20 }}>
            <TouchableOpacity style={styles.signInButton}>
              <Text style={styles.signInText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPasswordScreen;

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
