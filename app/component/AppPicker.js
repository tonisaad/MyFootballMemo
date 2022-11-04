import React, { useState } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppColors from "../config/AppColors";
import AppText from "./AppText";

import AppScreen from "./AppScreen";
import AppPickerItem from "./AppPickerItem";

function AppPicker({ data, icon, placeholder, selectedItem, onSelectItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
          <View style={styles.cont1}>
            {icon && (
              <MaterialCommunityIcons
                name={icon}
                size={25}
                marginLeft={80}
                marginTop={20}
              />
            )}
            <AppText style={styles.InputStyle}>
              {" "}
              {selectedItem ? selectedItem.label : placeholder}{" "}
            </AppText>
            <MaterialCommunityIcons name="chevron-down" size={25} />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <Modal visible={modalVisible}>
        <AppScreen style={styles.screencont}>
          <Button title="close" onPress={() => setModalVisible(false)} />

          <FlatList
            data={data}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <AppPickerItem
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
                label={item.label}
                image={item.image}
              />
            )}
          />
        </AppScreen>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  screencont: {
    backgroundColor: "white",
  },
  container: {
    backgroundColor: AppColors.otherColor3,
    flexDirection: "row",
    borderRadius: 25,
    marginVertical: 10,
    width: "100%",
    height: "8%",
  },

  cont1: {
    marginLeft: 10,
    flexDirection: "row",
    width: 360,
    marginTop: 15,
  },
  InputStyle: {
    fontSize: Platform.OS === "android" ? 16 : 20,
    fontFamily: Platform.OS === "android" ? "serif" : "Cochin",
    marginLeft: Platform.OS === "android" ? 5 : 8,
    marginBottom: 0,
    flex: 1,
    color: "#000",
  },
});

export default AppPicker;
