import {
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { Fragment, useState } from "react";
import { HOME_STACK } from "../constants";
import { useNavigation } from "@react-navigation/native";

export default function AuthScreen() {
  const logo = require("../assets/water-tap.png");
  const logoTitle = require("../assets/logo-title.png");

  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoginScreen, setIsLoginScreen] = useState(true);

  function resetTextInputs() {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  }

  async function login() {
    Keyboard.dismiss();

    console.log("Login pressed!");
    navigation.navigate(HOME_STACK);
    // try {
    //   const response = await axios.post(API + API_LOGIN, {
    //     username,
    //     password,
    //   });

    // } catch (error) {

    // }
  }

  async function signUp() {
    Keyboard.dismiss();

    console.log("Sign Up pressed!");
  }

  return (
    // Fragment is used to split the SafeAreaView so that the top and bottom can be styled differently.
    <Fragment>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: "#004BA0" }}
      ></SafeAreaView>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#1976D2" }}>
        <View style={styles.logoTitleHeader}>
          <Image style={styles.logoTitle} source={logoTitle} />
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Username:</Text>
              <TextInput
                style={styles.loginInput}
                value={username}
                onChangeText={setUsername}
                textContentType={"username"}
              />
              <Text style={styles.loginText}>Password:</Text>
              <TextInput
                style={styles.loginInput}
                value={password}
                onChangeText={setPassword}
                textContentType={"password"}
                secureTextEntry={true}
              />

              {/* Checks if the login screen state is set to true. If false (register screen), then include the confirm password elements. */}

              {!isLoginScreen && (
                <>
                  <Text style={styles.loginText}>Confirm Password:</Text>
                  <TextInput
                    style={styles.loginInput}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    textContentType={"password"}
                    secureTextEntry={true}
                  />
                </>
              )}

              <View style={styles.flexRow}>
                {/* If the current screen is the login screen, run the login function. If it is not (i.e. currently on the register screen), return to login screen. */}
                <TouchableOpacity
                  style={styles.button}
                  onPress={async () => {
                    // prettier-ignore
                    isLoginScreen ? await login() : setIsLoginScreen(!isLoginScreen);
                  }}
                >
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                {/* If the current screen is the login screen, change the screen to the register screen. If it is not (i.e. currently on the register screen), run the register function. */}
                <TouchableOpacity
                  style={styles.button}
                  onPress={async () => {
                    // prettier-ignore
                    isLoginScreen ? setIsLoginScreen(!isLoginScreen) : await signUp();
                  }}
                >
                  <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  logoTitleHeader: {
    width: "100%",
    height: 175,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#004BA0",
  },
  logoTitle: {
    width: 333,
    height: 97,
  },
  logo: {
    width: 161,
    height: 175,
    marginVertical: 34,
  },
  loginContainer: {
    width: "100%",
    paddingHorizontal: 40,
  },
  loginText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 10,
  },
  loginInput: {
    backgroundColor: "#D9D9D9",
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    paddingVertical: 10,
    marginTop: 34,
    marginHorizontal: 20,
    backgroundColor: "#004BA0",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
