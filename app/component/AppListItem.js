import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import AppText from "./AppText";
function AppListItem({ image, title, subtitle }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.textcontainer}>
        <AppText style={{ fontSize: 30, fontWeight: "bold" }}>{title}</AppText>
        <AppText style={{ textAlign: "center" }}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    borderRadius: 25,
    marginBottom: 10,
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  textcontainer: {
    alignItems: "center",
    flexDirection: "column",
    marginRight: 10,
    marginLeft: 10,
    alignContent: "center",
  },
});

export default AppListItem;
