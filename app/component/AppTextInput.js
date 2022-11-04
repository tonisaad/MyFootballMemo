import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppColors from "../config/AppColors";

function AppTextInput({ icon, height, ...otherProps }) {
  return (
    <View style={styles.container} height={height}>
      <MaterialCommunityIcons
        style={styles.iconStyle}
        name={icon}
        size={28}
        marginLeft={30}
      />
      <TextInput style={styles.InputStyle} {...otherProps} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.otherColor3,
    flexDirection: "row",
    borderRadius: 25,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  InputStyle: {
    fontSize: Platform.OS === "android" ? 16 : 20,
    fontFamily: Platform.OS === "android" ? "serif" : "Cochin",
    marginLeft: Platform.OS === "android" ? 5 : 8,
    marginTop: 2,
    flex: 1,
    color: "#000",
  },
  iconStyle: {
    paddingLeft: 15,
  },
});

export default AppTextInput;
