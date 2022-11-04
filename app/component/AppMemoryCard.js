import { setStatusBarHidden } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import AppColors from "../config/AppColors";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppMemoryCard({ country, location, title, subtitle, image }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 400,
          height: 25,
          backgroundColor: "#9fb0ff",
          alignSelf: "left",
          marginLeft: 10,
          flexDirection: "row",
        }}
      >
        <MaterialCommunityIcons name={"map-marker"} size={20} />
        <AppText>{location}</AppText>
      </View>
      {isFinite(image) ? (
        <Image style={styles.image} source={image} />
      ) : (
        <Image style={styles.image} source={{ uri: image }} />
      )}
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subtitle}>{subtitle}</AppText>
      <AppText style={styles.subtitle}>{country}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.otherColor3,
    borderRadius: 18,
    overflow: "hidden",
    marginBottom: 25,
    paddingBottom: 10,
    paddingTop: 10,
    borderColor: "black",
    borderWidth: 3,
  },
  locationStyle: {
    paddingBottom: 0,
  },
  image: {
    height: 200,
    width: 400,
    marginTop: 10,
  },
  title: {
    paddingTop: 10,
    fontWeight: "bold",
    marginLeft: 10,
  },
  subtitle: {
    marginLeft: 10,
    fontSize: 18,
  },
});
export default AppMemoryCard;
