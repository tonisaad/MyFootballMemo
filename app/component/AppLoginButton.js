import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import AppColors from "../config/AppColors";
import AppText from "./AppText";

function AppLoginButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <AppText> {title} </AppText>
        <AntDesign name="login" size={20} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppColors.primaryColor,
    width: "100%",
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AppLoginButton;
