import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { memo } from "react/cjs/react.production.min";

import AppMemoryCard from "../component/AppMemoryCard";
import AppPicker from "../component/AppPicker";
import AppScreen from "../component/AppScreen";
import AppText from "../component/AppText";
import AppColors from "../config/AppColors";
import DataManager from "../config/DataManager";
const countries = [
  { label: "Spain", value: 1, image: require("../assets/spain.png") },
  { label: "England", value: 2, image: require("../assets/england.png") },
  { label: "Italy", value: 3, image: require("../assets/italy.png") },
  { label: "France", value: 4, image: require("../assets/france.png") },
  { label: "Germany", value: 5, image: require("../assets/germany.png") },
  { label: "Argentina", value: 6, image: require("../assets/argentina.png") },
  { label: "Portugal", value: 7, image: require("../assets/portugal.png") },
  {
    label: "All Countries",
    value: 8,
    image: require("../assets/world-map.gif"),
  },
];

const getMemories = () => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserID();
  return commonData.getMemories(user);
};

function MemoryScreen(props) {
  const [country, setCountry] = useState("");
  var memoryList = getMemories();
  console.log(memoryList);

  let searcString = country.label;

  var originalList = memoryList;

  var newMemoryList = memoryList.filter((memory) =>
    memory.country.includes(searcString)
  );

  console.log(newMemoryList);

  console.log(country.label);

  console.log(searcString);

  if (typeof searcString === "undefined") {
    // the variable is defined
  } else {
    memoryList = newMemoryList;
  }
  if (typeof searcString !== "undefined") {
    // the variable is defined

    if (searcString.includes("All")) {
      memoryList = originalList;
    } else {
    }
  }

  return (
    <AppScreen style={styles.container}>
      <AppPicker
        data={countries}
        icon="apps"
        placeholder="All Countries"
        selectedItem={country}
        onSelectItem={(item) => setCountry(item)}
      />

      <FlatList
        data={memoryList}
        keyExtractor={(memory) => memory.memoryid.toString()}
        renderItem={({ item }) => (
          <View style={styles.padding}>
            <AppMemoryCard
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              location={item.location}
              country={item.country}
            />
          </View>
        )}
      />
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },

  padding: {
    padding: 10,
  },
});
export default MemoryScreen;
