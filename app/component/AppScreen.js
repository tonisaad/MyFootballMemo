import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import AppColors from "../config/AppColors";
import Constants from "expo-constants";

function AppScreen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primaryColor,
    marginTop: Constants.statusBarHeight,
  },
  paddingView: {
    padding: 20,
  },
});
export default AppScreen;
