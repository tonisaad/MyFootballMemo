import { React } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppButton from "./app/component/AppButton";
import AppScreen from "./app/component/AppScreen";
import AppText from "./app/component/AppText";
import AppColors from "./app/config/AppColors";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AccountScreen from "./app/screens/AccountScreen";
import MemoryScreen from "./app/screens/MemoryScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import TabNavigator from "./app/navigation/TabNavigator";
import AddMemoryScreen from "./app/screens/AddMemoryScreen";
import AppMemoryCard from "./app/component/AppMemoryCard";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
});
