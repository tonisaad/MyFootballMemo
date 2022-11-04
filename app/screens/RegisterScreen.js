import React from "react";
import reactDom from "react-dom";
import {
  Text,
  Image,
  View,
  StyleSheet,
  backgroundColor,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import AppScreen from "../component/AppScreen";
import AppText from "../component/AppText";
import AppColors from "../config/AppColors";
import AppLoginButton from "../component/AppLoginButton";
import AppTextInput from "../component/AppTextInput";
import AppButton from "../component/AppButton";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(10).label("Password"),
});

function RegisterScreen({ navigation }) {
  return (
    <AppScreen style={styles.cont}>
      <View style={styles.container}>
        <Image
          style={styles.icon1}
          source={require("../assets/Memo.png")}
        ></Image>
      </View>

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={schema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <View style={styles.bottomContainer}>
              <View style={styles.textCont}>
                <Text style={styles.textRegister}> Create Account</Text>
              </View>
              <View style={styles.buttonsCont}>
                {touched.name && (
                  <AppText style={{ color: "orange" }}>{errors.name}</AppText>
                )}
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="account"
                  placeholder="Full Name"
                  keyboardType="default"
                  textContentType="name"
                  onBlur={() => setFieldTouched("name")}
                  onChangeText={handleChange("name")}
                  height="35%"
                />
                {touched.email && (
                  <AppText style={{ color: "orange" }}>{errors.email}</AppText>
                )}
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="email"
                  placeholder="Email Address"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  onBlur={() => setFieldTouched("email")}
                  onChangeText={handleChange("email")}
                  height="35%"
                />
                {touched.password && (
                  <AppText style={{ color: "orange" }}>
                    {errors.password}
                  </AppText>
                )}
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock"
                  placeholder="Password"
                  secureTextEntry={true}
                  textContentType="password"
                  onBlur={() => setFieldTouched("password")}
                  onChangeText={handleChange("password")}
                  height="35%"
                />
              </View>

              <View style={styles.button}>
                <AppLoginButton
                  title={"Sign up"}
                  onPress={handleSubmit}
                ></AppLoginButton>
              </View>
              <View style={styles.botbutton}>
                <AppText>Already have an account?</AppText>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <View>
                    <Text style={styles.buttontext}> Sign in </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </Formik>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  cont: {
    marginTop: 0,
  },
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
  textRegister: {
    fontWeight: "bold",
    fontSize: Platform.OS === "android" ? 30 : 40,
    fontFamily: Platform.OS === "android" ? "serif" : "Cochin",
  },

  textCont: {
    marginTop: 20,
    alignItems: "flex-start",
    height: "15%",
    //backgroundColor: 'red',
    justifyContent: "space-between",
    width: "90%",
  },
  buttonsCont: {
    marginTop: 0,
    width: "75%",
    //backgroundColor:"red",
    height: "20%",
    justifyContent: "space-between",
  },
  button: {
    width: "30%",
    marginTop: 135,
    marginLeft: 170,
  },
  botbutton: {
    flexDirection: "row",
    marginTop: 90,
  },
  buttontext: {
    color: AppColors.primaryColor,
    fontSize: Platform.OS === "android" ? 16 : 20,
    fontFamily: Platform.OS === "android" ? "serif" : "Cochin",
  },
});

export default RegisterScreen;
