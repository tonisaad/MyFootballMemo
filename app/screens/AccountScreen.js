import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AppScreen from "../component/AppScreen";
import AppListItem from "../component/AppListItem";
import AppIcon from "../component/AppIcon";
import AppColors from "../config/AppColors";
import { useNavigation } from "@react-navigation/native";

function AccountScreen({ navigation, route }) {
  console.log(route.params);
  return (
    <AppScreen style={styles.cont}>
      <View style={styles.container}>
        <Image
          style={styles.icon1}
          source={require("../assets/Memo.png")}
        ></Image>
      </View>
      <View style={styles.profileContainer}>
        <AppListItem
          image={route.params.paramImage}
          title={route.params.paramName}
          subtitle={route.params.paramProfile}
        />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Memories")}>
          <AppIcon
            name="rewind"
            size={90}
            iconColor="black"
            backgroundColor={AppColors.otherColor3}
            iconName="Memories"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <AppIcon
            name="cog-outline"
            size={90}
            iconColor="black"
            backgroundColor={AppColors.otherColor3}
            iconName="Settings"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <AppIcon
            name="camera"
            size={90}
            iconColor="black"
            backgroundColor={AppColors.otherColor3}
            iconName="Camera"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
          <AppIcon
            name="logout"
            size={90}
            iconColor="black"
            backgroundColor={AppColors.otherColor3}
            iconName="Log out"
          />
        </TouchableOpacity>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  cont: {
    marginTop: 0,
  },
  icon1: {
    height: 170,
    width: 200,
  },
  container: {
    alignItems: "center",
    //backgroundColor: 'red'
  },

  profileContainer: {
    marginTop: 0,
    //backgroundColor:'red',
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 10,
  },
});

export default AccountScreen;
