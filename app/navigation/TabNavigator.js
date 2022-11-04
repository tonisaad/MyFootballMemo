import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AppTab = createBottomTabNavigator();
import AccountScreen from "../screens/AccountScreen";
import MemoryScreen from "../screens/MemoryScreen";
import AddMemoryScreen from "../screens/AddMemoryScreen";
import AppColors from "../config/AppColors";
import AppIcon from "../component/AppIcon";
import HomeNavigator from "./HomeNavigator";

const TabNavigator = () => (
  <AppTab.Navigator
    screenOptions={{
      tabBarActiveTintColor: AppColors.secondaryColor,
      tabBarActiveBackgroundColor: AppColors.otherColor3,
    }}
  >
    <AppTab.Screen
      name="Home"
      component={HomeNavigator}
      options={{ tabBarIcon: () => <AppIcon size={40} name="home" /> }}
    />
    <AppTab.Screen
      name="Add"
      component={AddMemoryScreen}
      options={{ tabBarIcon: () => <AppIcon size={40} name="plus-box" /> }}
    />
    <AppTab.Screen
      name="Memories"
      component={MemoryScreen}
      options={{ tabBarIcon: () => <AppIcon size={45} name="rewind" /> }}
    />
  </AppTab.Navigator>
);

export default TabNavigator;
