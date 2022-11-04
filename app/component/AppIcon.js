import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";

function AppIcon({
  name,
  size,
  iconColor,
  backgroundColor,
  iconName,
  isAppText,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: backgroundColor,
        borderRadius: size / 3.2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.7} />
      {name != "camera" && (
        <AppText style={{ fontSize: 12 }}>{iconName}</AppText>
      )}
    </View>
  );
}
const styles = StyleSheet.create({});

export default AppIcon;
