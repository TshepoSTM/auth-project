import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../styles/theme";
import NavHeader from "../navs/navHeader";

const Dashboard = ({ navigation }) => {
  const [names, setNames] = useState<string>("Releigh");

  return (
    <SafeAreaView style={styles.container}>
      <NavHeader navigation={navigation} />
      <ScrollView style={styles.body}>
        <View style={styles.welcome}>
          <View
            style={{
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Text
              style={{ fontSize: theme.fontSize.medium, fontWeight: "900" }}
            >
              Hi,{names}
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={{ color: theme.colors.white }}>First Card</Text>
        </View>
        <View style={styles.card}>
          <Text style={{ color: theme.colors.white }}>First Card</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

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
  card: {
    borderWidth: 1,
    borderColor: theme.colors.lightPrimary,
    backgroundColor: theme.colors.primary,
    borderRadius: 15,
    padding: 70,
    alignItems: "center",
    marginVertical: 10,
  },
});
