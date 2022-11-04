import React from "react";
import reactDom from "react-dom";
import { Image, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppScreen from "../component/AppScreen";
import AppText from "../component/AppText";
import AppColors from "../config/AppColors";
import AppButton from "../component/AppButton";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

function WelcomeScreen({ navigation }) {
  return (
    <AppScreen>
      <View style={styles.container}>
        <Image
          style={styles.icon1}
          source={require("../assets/Memo.png")}
        ></Image>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.textCont}>
          <AppText>Welcome to MEMOS!</AppText>
          <AppText>Login or Register to get started</AppText>
        </View>
        <View style={styles.buttonsCont}>
          <AppButton
            title="Login"
            onPress={() => navigation.navigate("Login")}
          />

          <AppButton
            title={"Register"}
            onPress={() => navigation.navigate("Register")}
          ></AppButton>
        </View>
      </View>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  icon1: {
    height: 300,
    width: 300,
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: AppColors.otherColor2,
    alignItems: "center",
  },

  textCont: {
    marginTop: 20,
    alignItems: "center",
    height: "15%",
    // backgroundColor: 'red',
    justifyContent: "space-between",
  },
  buttonsCont: {
    marginTop: 90,
    width: "60%",
    //backgroundColor:"red",
    height: "30%",
    justifyContent: "space-between",
  },
});

export default WelcomeScreen;
