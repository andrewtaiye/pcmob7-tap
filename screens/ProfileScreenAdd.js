import {
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function ProfileScreenAdd() {
  const navigation = useNavigation();
  const [role, setRole] = useState("");
  const [dateDay, setDateDay] = useState("");
  const [dateMonth, setDateMonth] = useState("");
  const [dateYear, setDateYear] = useState("");

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: "none" },
    });
    return () => {
      navigation.getParent().setOptions({
        tabBarStyle: {
          backgroundColor: "#63A4FF",
          borderTopWidth: 1,
          borderTopColor: "#004BA0",
          display: "flex",
        },
      });
    };
  }, [navigation]);

  return (
    // Fragment is used to split the SafeAreaView so that the top and bottom can be styled differently.
    <Fragment>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: "#004BA0" }}
      ></SafeAreaView>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.titleHeader}>
          <Text style={styles.title}>ADD ROLE</Text>
          <Text style={styles.title}>icon</Text>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Role:</Text>
              <TextInput
                style={styles.loginInput}
                value={""}
                onChangeText={""}
              />
              <Text style={styles.loginText}>Passing Date:</Text>
              <View style={styles.dates}>
                <TextInput
                  style={styles.dateInput}
                  value={dateDay}
                  onChangeText={setDateDay}
                  keyboardType={"numeric"}
                />
                <Text>/</Text>
                <TextInput
                  style={styles.dateInput}
                  value={dateMonth}
                  onChangeText={setDateMonth}
                  keyboardType={"numeric"}
                />
                <Text>/</Text>
                <TextInput
                  style={styles.dateInput}
                  value={dateYear}
                  onChangeText={setDateYear}
                  keyboardType={"numeric"}
                />
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
    paddingHorizontal: 40,
    backgroundColor: "white",
  },
  titleHeader: {
    width: "100%",
    height: 85,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#004BA0",
    paddingHorizontal: 40,
  },
  title: {
    color: "white",
    fontSize: 40,
  },
  loginContainer: {
    width: "100%",
    marginTop: 34,
  },
  loginText: {
    color: "black",
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
    fontSize: 20,
  },
  dates: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateInput: {
    backgroundColor: "#D9D9D9",
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: "25%",
    fontSize: 20,
    textAlign: "center",
  },
});
