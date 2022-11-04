import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import AppButton from "../component/AppButton";
import AppMemoryCard from "../component/AppMemoryCard";
import AppPicker from "../component/AppPicker";
import AppScreen from "../component/AppScreen";
import AppText from "../component/AppText";
import AppTextInput from "../component/AppTextInput";
import AppColors from "../config/AppColors";
import DataManager from "../config/DataManager";
import * as ImagePicker from "expo-image-picker";
import AppIcon from "../component/AppIcon";

const countries = [
  { label: "Spain", value: 1, image: require("../assets/spain.png") },
  { label: "England", value: 2, image: require("../assets/england.png") },
  { label: "Italy", value: 3, image: require("../assets/italy.png") },
  { label: "France", value: 4, image: require("../assets/france.png") },
  { label: "Germany", value: 5, image: require("../assets/germany.png") },
  { label: "Argentina", value: 6, image: require("../assets/argentina.png") },
  { label: "Portugal", value: 7, image: require("../assets/portugal.png") },
];

function AddMemoryScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState("");

  const [titleError, setTitleError] = useState("");
  const [subTitleError, setSubTitleError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [imageError, setImageError] = useState("");

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    setImage({ path: pickerResult.uri });
    console.log(pickerResult);
  };

  const doErrorCheck = () => {
    console.log(title, subTitle, location, country.label);
    setTitleError(title.length > 0 ? "" : "Please set a Valid Memory Title");
    setSubTitleError(
      subTitle.length > 0 ? "" : "Please set a Valid Memory Date"
    );
    setLocationError(
      location.length > 0 ? "" : "Please set a Valid Memory Date"
    );
    setCountryError(country ? "" : "Please pick a Country");
    setImageError(image ? "" : "Please pick an Image");

    return title.length > 0 &&
      subTitle.length > 0 &&
      location.length > 0 &&
      country &&
      image
      ? true
      : false;
  };
  const addMemory = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();

    const memories = commonData.getMemories(user);
    const memoryID = memories.length + 1;
    const newMemory = {
      title: title,
      subtitle: subTitle,
      location: location,
      country: country.label,
      memoryid: memoryID,
      userid: user,
      image: image.path,
    };

    console.log(newMemory);
    commonData.addMemory(newMemory);
  };

  return (
    <AppScreen style={styles.container}>
      <View style={styles.padding}>
        <AppTextInput
          icon="soccer"
          placeholder="Memory Title"
          height="5%"
          value={title}
          onChangeText={(inputText) => setTitle(inputText)}
        />

        {titleError.length > 0 ? (
          <AppText style={{ margin: 3, color: "orange", fontSize: 16 }}>
            {titleError}
          </AppText>
        ) : (
          <></>
        )}

        <AppTextInput
          icon="calendar"
          placeholder="Date"
          height="5%"
          value={subTitle}
          onChangeText={(inputText) => setSubTitle(inputText)}
        />
        {subTitleError.length > 0 ? (
          <AppText style={{ margin: 3, color: "orange", fontSize: 16 }}>
            {subTitleError}
          </AppText>
        ) : (
          <></>
        )}
        <AppTextInput
          icon="soccer-field"
          placeholder="Memory Location"
          height="5%"
          value={location}
          onChangeText={(inputText) => setLocation(inputText)}
        />
        {locationError.length > 0 ? (
          <AppText style={{ margin: 5, color: "orange", fontSize: 16 }}>
            {locationError}
          </AppText>
        ) : (
          <></>
        )}
        <AppPicker
          data={countries}
          icon="apps"
          placeholder="Countries"
          selectedItem={country}
          onSelectItem={(item) => setCountry(item)}
        />
        {countryError.length > 0 ? (
          <AppText style={{ margin: 3, color: "orange", fontSize: 16 }}>
            {countryError}
          </AppText>
        ) : (
          <></>
        )}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "flex-start",
            width: "100%",
            // marginLeft: 10,
          }}
        >
          <AppText style={styles.label}> Add Image </AppText>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={openImagePickerAsync}
          >
            <AppIcon
              name="camera"
              size={60}
              iconColor="black"
              backgroundColor="#3C54BC"
            ></AppIcon>
            <View style={styles.margin}>
              <Image
                source={{ uri: image.path }}
                style={{ height: 100, width: 100, borderRadius: 20 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        {imageError.length > 0 ? (
          <AppText style={{ margin: 3, color: "orange", fontSize: 16 }}>
            {imageError}
          </AppText>
        ) : (
          <></>
        )}

        <View style={styles.addButton}>
          <AppButton
            title="Add Memory"
            onPress={() => {
              if (doErrorCheck()) {
                addMemory();
                navigation.navigate("Memories");
              }
            }}
          >
            {" "}
          </AppButton>
        </View>
      </View>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  margin: {
    marginLeft: 170,
  },
  padding: {
    padding: 10,
    height: "100%",
  },

  imageButton: {
    // alignItems: "center",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    fontSize: 26,
  },

  addButton: {
    width: "50%",
    flexDirection: "row-reverse",
  },
});
export default AddMemoryScreen;
