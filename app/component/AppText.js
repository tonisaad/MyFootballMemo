import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

function AppText({ style, children }) {
  return <Text style={[styles.text, style]}> {children} </Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: Platform.OS === "android" ? 16 : 20,
    fontFamily: Platform.OS === "android" ? "serif" : "Cochin",
  },
});

export default AppText;
