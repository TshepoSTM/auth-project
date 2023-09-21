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

const ProfileScreen = ({ navigation }) => {
  // const { , style } = props;
  const [firstName, setFirstName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [cellphone, setCellphone] = useState<string>("");

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
            <Text style={{ fontSize: theme.fontSize.small, fontWeight: "900" }}>
              My Profile
            </Text>
          </View>
        </View>
        <View style={styles.bodyContents}>
          <CustomInput
            placeholder="First Name"
            value={firstName}
            setValue={setFirstName}
            secureTextEntry={false}
            keyboardType={"default"}
          />
          <CustomInput
            placeholder="Surname"
            value={surname}
            setValue={setSurname}
            secureTextEntry={false}
            keyboardType={"default"}
          />
          <CustomInput
            placeholder="Email"
            value={username}
            setValue={setUsername}
            secureTextEntry={false}
            keyboardType={"default"}
          />
          <CustomInput
            placeholder="Cellphone"
            value={cellphone}
            setValue={setCellphone}
            secureTextEntry={false}
            keyboardType={"numeric"}
          />
          <View style={{ marginVertical: 10 }}>
            <TouchableOpacity
              onPress={() => console.log("")}
              style={styles.signInButton}
            >
              <Text style={styles.signInText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

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
    marginVertical: 10,
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
});
