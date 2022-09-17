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
import React, { Fragment, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ASSESSMENTS_SCREEN } from "../constants";

import {
  deleteField,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export default function AssessmentScreenUpdate() {
  const exitBtn = require("../assets/exit_btn.png");

  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params;
  const choice = params.choice;

  const [user, setUser] = useState({});
  const [userDocData, setUserDocData] = useState({});

  const [instructor, setInstructor] = useState("");
  const [dateDay, setDateDay] = useState("");
  const [dateMonth, setDateMonth] = useState("");
  const [dateYear, setDateYear] = useState("");
  const [objective, setObjective] = useState("");
  const [gradeA, setGradeA] = useState("");
  const [gradeB, setGradeB] = useState("");
  const [gradeC, setGradeC] = useState("");
  const [passFail, setPassFail] = useState("");

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

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    // prettier-ignore
    const userDocRef = await doc(db, 'users', params.username)
    const userDoc = await getDoc(userDocRef);
    setUser(userDocRef);
    setUserDocData(userDoc.data());
  }

  function updateAssessment() {
    console.log("Updating Assessment!");
    navigation.navigate(ASSESSMENTS_SCREEN.Home);
  }

  function deleteAssessment() {
    console.log(`roles.${choice}.assesment${params.id}`);
    updateDoc(user, {
      [`roles.${choice}.assessment${params.id}`]: deleteField(),
    })
      .then(() => {
        console.log("Deleting Assessment!");
        navigation.navigate(ASSESSMENTS_SCREEN.Home);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    // Fragment is used to split the SafeAreaView so that the top and bottom can be styled differently.
    <Fragment>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: "#004BA0" }}
      ></SafeAreaView>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={[styles.titleHeader, styles.flexRow]}>
          <Text style={styles.title}>ADD ASSESSMENT</Text>
          <Image source={exitBtn} />
        </View>

        {/* TouchableWithoutFeedback wrapper is to allow users to tap out of the keyboard */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            <View style={styles.loginContainer}>
              <Text style={styles.labels}>Instructor:</Text>
              <TextInput
                style={styles.textInput}
                value={instructor}
                onChangeText={setInstructor}
              />
              <Text style={styles.labels}>Date:</Text>
              <View style={[styles.flexRow, styles.dates]}>
                <TextInput
                  style={[styles.textInput, styles.dateInput]}
                  value={dateDay}
                  onChangeText={setDateDay}
                  keyboardType={"numeric"}
                />
                <Text>/</Text>
                <TextInput
                  style={[styles.textInput, styles.dateInput]}
                  value={dateMonth}
                  onChangeText={setDateMonth}
                  keyboardType={"numeric"}
                />
                <Text>/</Text>
                <TextInput
                  style={[styles.textInput, styles.dateInput]}
                  value={dateYear}
                  onChangeText={setDateYear}
                  keyboardType={"numeric"}
                />
              </View>
              <Text style={styles.labels}>Objective:</Text>
              <TextInput
                style={styles.textInput}
                value={objective}
                onChangeText={setObjective}
              />
              <Text style={styles.labels}>Grades:</Text>
              <View style={[styles.flexRow, styles.grades]}>
                <Text style={styles.labels}>A: </Text>
                <TextInput
                  style={[styles.textInput, styles.gradesInput]}
                  value={gradeA}
                  onChangeText={setGradeA}
                />
                <Text style={styles.labels}>B: </Text>
                <TextInput
                  style={[styles.textInput, styles.gradesInput]}
                  value={gradeB}
                  onChangeText={setGradeB}
                />
                <Text style={styles.labels}>C: </Text>
                <TextInput
                  style={[styles.textInput, styles.gradesInput]}
                  value={gradeC}
                  onChangeText={setGradeC}
                />
              </View>
              <Text style={styles.labels}>Pass / Fail:</Text>
              <TextInput
                style={styles.textInput}
                value={passFail}
                onChangeText={setPassFail}
              />
            </View>
            <View style={[styles.flexRow, styles.submitContainer]}>
              <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                  await updateAssessment();
                }}
              >
                <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                  await deleteAssessment();
                }}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
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
  flexRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  titleHeader: {
    height: 85,
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
  labels: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 10,
  },
  textInput: {
    backgroundColor: "#D9D9D9",
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 20,
  },
  dates: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateInput: {
    width: "25%",
    textAlign: "center",
  },
  grades: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  gradesInput: {
    width: "20%",
    textAlign: "center",
  },
  submitContainer: {
    justifyContent: "center",
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
