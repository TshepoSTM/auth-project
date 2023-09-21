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
import { theme } from "../styles/theme";
import { useTheme } from "react-native-paper";
import CustomInput from "../utils/customInput";
import { UserContext } from "../../../context/userContext";

const SignInScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { userLogin } = useContext(UserContext);

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
          Sign In Here
        </Text>
        <Text
          style={{
            fontSize: theme.fontSize.large,
            maxWidth: "60%",
            textAlign: "center",
          }}
        >
          Welcome back you've been missed!
        </Text>
      </View>
      <ScrollView style={{ marginVertical: 15, padding: 20 }}>
        <CustomInput
          placeholder="Email"
          value={username}
          setValue={setUsername}
          secureTextEntry={false}
          keyboardType={"email-address"}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          keyboardType={"default"}
        />

        <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
            <Text style={styles.forgotText}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginVertical: 10 }}>
          <TouchableOpacity
            onPress={() => userLogin(username, password)}
            style={styles.signInButton}
          >
            <Text style={styles.signInText}>Sign In</Text>
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
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.signUpText}>Create new account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;

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
