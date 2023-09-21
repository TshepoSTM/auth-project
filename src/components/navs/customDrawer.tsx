import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { theme } from "../styles/theme";
import { UserContext } from "../../../context/userContext";

const CustomDrawer = (props: any) => {
  const { navigation } = props;
  const { userLogout } = useContext(UserContext);
  const [names, setNames] = useState<string>("Wilty Mone");
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={require("../../../assets/images/background-image.jpeg")}
          resizeMode="cover"
          style={styles.image}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            <Ionicons
              name="person-circle-outline"
              size={80}
              color={theme.colors.white}
            />
            <Text
              style={{
                color: "#f5f3f3",
                marginRight: 0,
              }}
            >
              {names}
            </Text>
          </View>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          paddingLeft: 15,
          paddingTop: 10,
          paddingBottom: 10,
          borderTopWidth: 1,
          borderTopColor: theme.colors.lightPrimary,
        }}
      >
        <TouchableOpacity style={{ paddingVertical: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="information-circle"
              size={25}
              color={theme.colors.primary}
            />
            <Text
              style={{
                paddingLeft: 10,
                color: theme.colors.primary,
                fontWeight: "bold",
              }}
            >
              About Us
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => userLogout()}
          style={{ paddingVertical: 5 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="log-out" size={25} color={theme.colors.primary} />
            <Text
              style={{
                paddingLeft: 10,
                color: theme.colors.primary,
                fontWeight: "bold",
              }}
            >
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginTop: -5,
    padding: 20,
    minHeight: 150,
    position: "relative",
  },
});
