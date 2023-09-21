import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { theme } from "../styles/theme";
import { UserContext } from "../../../context/userContext";

const NavHeader = (props: any) => {
  const { navigation, style } = props;
  const { userLogout } = useContext(UserContext);
  return (
    <View style={styles.header}>
      <TouchableOpacity
        disabled={false}
        onPress={() =>
          navigation.dispatch({
            ...DrawerActions.openDrawer(),
          })
        }
      >
        <Ionicons name="menu" size={30} color={theme.colors.primary} />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <Ionicons
            name="notifications-circle"
            size={30}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Ionicons
            name="person-circle"
            size={30}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: theme.colors.lightPrimary,
    margin: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 0.5,
    shadowRadius: 25,
  },
  /*header: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    borderBottomColor: "#C6C6C6",
    //margin: 10,
    paddingVertical: 0,
    paddingHorizontal: 15,
    alignItems: "center",
  },*/
});
