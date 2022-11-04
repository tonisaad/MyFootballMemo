import { React } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MemoryScreen from "../screens/MemoryScreen";

const AppStack = createStackNavigator();

const AuthNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Account1"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Memories"
      component={MemoryScreen}
      options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);

export default AuthNavigator;
