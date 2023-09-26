import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.BtnStyle}
        onPress={() => navigation.navigate("Course")}
      >
        <Image
          source={require("../../assets/courses.png")}
          style={styles.userStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.BtnStyle}
        onPress={() => navigation.navigate("UserData")}
      >
        <Image
          source={require("../../assets/User.png")}
          style={styles.userStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.BtnStyle}
        onPress={() => navigation.navigate("About")}
      >
        <Image
          source={require("../../assets/about.png")}
          style={styles.userStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.BtnStyle}
        onPress={() => navigation.navigate("Contact")}
      >
        <Image
          source={require("../../assets/contact.png")}
          style={styles.userStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  menuContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 125,
    backgroundColor: "skyblue",
    width: "100%",
    padding: 8,
  },
  textStyle: {
    fontWeight: "bold",
    color: "#fff",
  },
  userStyle: {
    width:"100%",
    aspectRatio: 1,
    height: 40,
  },
});
export default Menu;
