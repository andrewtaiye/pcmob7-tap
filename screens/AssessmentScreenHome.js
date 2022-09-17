import { ASSESSMENTS_SCREEN } from "../constants";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Fragment, useEffect, useState } from "react";
import ModalDropdown from "react-native-modal-dropdown";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export default function AssessmentScreenHome() {
  const addBtn = require("../assets/add_btn.png");
  const exitBtn = require("../assets/exit_btn.png");

  const navigation = useNavigation();
  const [choice, setChoice] = useState("");
  const [roles, setRoles] = useState({});
  const [rolesChoice, setRolesChoice] = useState([]);
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const pickedRoleAssessments = roles[choice];

    const displayArray = [];

    for (const assessment in pickedRoleAssessments) {
      if (assessment !== "name") {
        const date = pickedRoleAssessments[assessment].date
          .toDate()
          .toDateString();

        let pass = "";
        if (pickedRoleAssessments[assessment].pass) {
          pass = "Pass";
        } else {
          pass = "Fail";
        }

        const display = (
          <List.Accordion
            style={styles.displayAccordion}
            titleStyle={styles.displayAccordionTitle}
            descriptionStyle={styles.displayAccordionDescription}
            title={`Assessment ${pickedRoleAssessments[assessment].id}`}
            description={`${
              pickedRoleAssessments[assessment].gradeA +
              pickedRoleAssessments[assessment].gradeB +
              pickedRoleAssessments[assessment].gradeC
            } / 30`}
          >
            <List.Item
              style={styles.displayItemStyle}
              titleStyle={styles.displayItemTitle}
              descriptionStyle={styles.displayItemDescription}
              title={`${pickedRoleAssessments[assessment].instructor}`}
              description={`${date}`}
            />
            <List.Item
              style={styles.displayItemStyle}
              titleStyle={styles.displayItemTitle}
              descriptionStyle={styles.displayItemDescription}
              titleNumberOfLines={3}
              title={`Objective - ${pickedRoleAssessments[assessment].objective}`}
            />
            <List.Item
              style={styles.displayItemStyle}
              titleStyle={styles.displayItemTitle}
              descriptionStyle={styles.displayItemDescription}
              title={`A: [${pickedRoleAssessments[assessment].gradeA}]    B: [${pickedRoleAssessments[assessment].gradeB}]    C: [${pickedRoleAssessments[assessment].gradeC}]    `}
              description={`${pass}`}
            />
            <List.Item
              style={styles.displayItemStyle}
              titleStyle={styles.displayItemTitle}
              descriptionStyle={[styles.edit, styles.displayItemDescription]}
              onPress={() => {
                navigation.navigate(ASSESSMENTS_SCREEN.Update);
              }}
              title=""
              description="Edit"
            />
          </List.Accordion>
        );

        displayArray.push(display);
      }
    }
    setAssessments(displayArray);
  }, [choice]);

  async function getData() {
    // prettier-ignore
    const snapshot = await getDocs(query(collection(db, "users"), where("name", "==", "myUsername")));
    const data = snapshot.docs.map((doc) => doc.data())[0].roles;
    const rolesChoice = [];
    for (const key in data) {
      rolesChoice.push(data[key].name);
    }
    rolesChoice.sort((a, b) => a - b);
    setRolesChoice(rolesChoice);
    setRoles(data);
  }

  // "assessment1": Object {
  //   "date": Object {
  //     "nanoseconds": 184000000,
  //     "seconds": 1663344000,
  //   },
  //   "gradeA": 5,
  //   "gradeB": 5,
  //   "gradeC": 5,
  //   "gradePercent": 50,
  //   "id": 1,
  //   "instructor": "instructor",
  //   "objective": "test objective",
  //   "pass": true,
  // },

  const AssessmentDisplay = () => {
    return <View style={styles.displayAssessments}>{assessments}</View>;
  };

  return (
    // Fragment is used to split the SafeAreaView so that the top and bottom can be styled differently.
    <Fragment>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: "#004BA0" }}
      ></SafeAreaView>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#1976D2" }}>
        <View style={styles.titleHeader}>
          <Text style={styles.title}>ASSESSMENTS</Text>
          <Image source={exitBtn} />
        </View>
        <View style={styles.container}>
          <View style={styles.roleSelector}>
            <Text style={styles.selectorText}>Roles:</Text>
            <ModalDropdown
              style={styles.dropdown}
              textStyle={{ fontSize: 20 }}
              dropdownStyle={styles.dropdownItems}
              dropdownTextStyle={{
                fontSize: 20,
                width: 250,
                textAlign: "center",
              }}
              onSelect={(index, value) => {
                setChoice(value);
              }}
              options={rolesChoice}
            />
          </View>
          <View style={styles.displayContainer}>
            <View style={styles.displayHeader}>
              <Text style={styles.displayHeaderText}>{choice}</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(ASSESSMENTS_SCREEN.Add);
                }}
              >
                <Image style={styles.logoTitle} source={addBtn} />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <AssessmentDisplay />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 40,
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
  roleSelector: {
    width: "100%",
    marginVertical: 34,
  },
  selectorText: {
    marginBottom: 8,
    marginLeft: 10,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  dropdown: {
    backgroundColor: "#D9D9D9",
    height: 34,
    width: "100%",
    paddingHorizontal: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  dropdownItems: {
    width: "75%",
    borderRadius: 10,
    alignItems: "center",
  },
  displayContainer: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  displayHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#004BA0",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  displayHeaderText: {
    color: "white",
    fontSize: 24,
  },
  displayAccordion: {
    backgroundColor: "#63A4FF",
    borderBottomWidth: 1,
    borderBottomColor: "#004BA0",
  },
  displayAccordionTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  displayAccordionDescription: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    marginTop: -20,
  },
  displayItemStyle: {
    paddingHorizontal: 20,
  },
  displayItemTitle: {
    fontSize: 16,
    marginLeft: -5,
  },
  displayItemDescription: {
    fontSize: 16,
    textAlign: "right",
    marginTop: -16,
  },
  edit: {
    color: "red",
  },
});
