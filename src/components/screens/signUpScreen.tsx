import React, { useState, useContext, useEffect } from "react";
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
import { registerForPushNotificationsAsync } from "../utils/registerDeviceToken";

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [cellphone, setCellphone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [conPassword, setConPassword] = useState<string>("");
  const [deviceToken, setDeviceToken] = useState<string>("");

  const { createUser } = useContext(UserContext);

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then((token) => {
        console.log(token);
        setDeviceToken(token);
      })
      .catch((e) => {
        console.log("registerForPushNotificationsAsync", e.message);
      });
  }, []);

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
          Create Account
        </Text>
        <Text
          style={{
            fontSize: theme.fontSize.large,
            maxWidth: "60%",
            textAlign: "center",
          }}
        >
          Create an account to explore our app
        </Text>
      </View>
      <ScrollView style={{ marginVertical: 15, padding: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <CustomRowInput
            placeholder="First Name"
            value={firstName}
            setValue={setFirstName}
            secureTextEntry={false}
            keyboardType={"default"}
          />
          <CustomRowInput
            placeholder="Surname"
            value={surname}
            setValue={setSurname}
            secureTextEntry={false}
            keyboardType={"default"}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 15,
          }}
        >
          <CustomRowInput
            placeholder="Email"
            value={username}
            setValue={setUsername}
            secureTextEntry={false}
            keyboardType={"default"}
          />
          <CustomRowInput
            placeholder="Cellphone"
            value={cellphone}
            setValue={setCellphone}
            secureTextEntry={false}
            keyboardType={"numeric"}
          />
        </View>
        <View>
          <CustomInput
            placeholder="Password"
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
        </View>
        <View style={{ marginVertical: 20 }}>
          <TouchableOpacity
            onPress={() =>
              createUser(
                firstName,
                surname,
                cellphone,
                username,
                password,
                conPassword,
                deviceToken
              )
            }
            style={styles.signInButton}
          >
            <Text style={styles.signInText}>Sign Up</Text>
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

export default SignUpScreen;

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
  textRowInputs: {
    fontSize: theme.fontSize.small,
    padding: 15,
    borderRadius: 20,
    backgroundColor: theme.colors.lightPrimary,
    width: "48%",
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
