import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import AppText from "./AppText";

function AppPickerItem({ onPress, image, label }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.icon1} source={image}></Image>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },

  icon1: {
    height: 30,
    width: 30,
    borderRadius: 40,
  },
});
export default AppPickerItem;
