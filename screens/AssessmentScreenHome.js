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

import {
  collection,
  firebase,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

export default function AssessmentScreenHome() {
  const addBtn = require("../assets/add_btn.png");
  const exitBtn = require("../assets/exit_btn.png");

  const roleObject = {
    role1: "Role 1",
    role2: "Role 2",
    role3: "Role 3",
  };

  const navigation = useNavigation();
  const [role, setRole] = useState("");
  const [roles, setRoles] = useState({});
  const [assessments, setAssessments] = useState([]);

  const getData = async () => {
    // prettier-ignore
    const snapshot = await getDocs(query(collection(db, "users"), where("name", "==", "myUsername")));
    const data = snapshot.docs.map((doc) => doc.data())[0].roles;
    setRoles(data);
  };

  function getSelectedRole() {
    console.log(role);
    const selectedRole = Object.keys(roles).find(
      (key) => roleObject[key] === role
    );

    console.log(selectedRole);
  }

  useEffect(() => {
    // getSelectedRole();
  }, []);

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
                setRole(value);
                console.log(value);
                setTimeout(() => {
                  getSelectedRole();
                }, 100);
              }}
              options={["Role 1", "Role 2", "Role 3"]}
            />
          </View>
          <View style={styles.displayContainer}>
            <View style={styles.displayHeader}>
              <Text style={styles.displayHeaderText}>{role}</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(ASSESSMENTS_SCREEN.Add);
                }}
              >
                <Image style={styles.logoTitle} source={addBtn} />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <View style={styles.displayAssessments}>
                <List.Accordion
                  style={styles.displayAccordion}
                  titleStyle={styles.displayAccordionTitle}
                  descriptionStyle={styles.displayAccordionDescription}
                  title="Assessment 1"
                  description="Grade %"
                >
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    title="Instructor"
                    description="Date and Time"
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    titleNumberOfLines={3}
                    title="Objective - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis cursus turpis, et lobortis risus accumsan ut."
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    title="A: []    B: []    C: []"
                    description="Pass"
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={[
                      styles.edit,
                      styles.displayItemDescription,
                    ]}
                    onPress={() => {
                      navigation.navigate(ASSESSMENTS_SCREEN.Update);
                    }}
                    title=""
                    description="Edit"
                  />
                </List.Accordion>
                <List.Accordion
                  style={styles.displayAccordion}
                  titleStyle={styles.displayAccordionTitle}
                  descriptionStyle={styles.displayAccordionDescription}
                  title="Assessment 2"
                  description="Grade %"
                >
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    title="Instructor"
                    description="Date and Time"
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    titleNumberOfLines={3}
                    title="Objective - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis cursus turpis, et lobortis risus accumsan ut."
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    title="A: []    B: []    C: []"
                    description="Pass"
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={[
                      styles.edit,
                      styles.displayItemDescription,
                    ]}
                    title=""
                    description="Edit"
                  />
                </List.Accordion>
                <List.Accordion
                  style={styles.displayAccordion}
                  titleStyle={styles.displayAccordionTitle}
                  descriptionStyle={styles.displayAccordionDescription}
                  title="Assessment 3"
                  description="Grade %"
                >
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    title="Instructor"
                    description="Date and Time"
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    titleNumberOfLines={3}
                    title="Objective - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis cursus turpis, et lobortis risus accumsan ut."
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    title="A: []    B: []    C: []"
                    description="Pass"
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={[
                      styles.edit,
                      styles.displayItemDescription,
                    ]}
                    title=""
                    description="Edit"
                  />
                </List.Accordion>
                <List.Accordion
                  style={styles.displayAccordion}
                  titleStyle={styles.displayAccordionTitle}
                  descriptionStyle={styles.displayAccordionDescription}
                  title="Assessment 4"
                  description="Grade %"
                >
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    title="Instructor"
                    description="Date and Time"
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    titleNumberOfLines={3}
                    title="Objective - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis cursus turpis, et lobortis risus accumsan ut."
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    title="A: []    B: []    C: []"
                    description="Pass"
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={[
                      styles.edit,
                      styles.displayItemDescription,
                    ]}
                    title=""
                    description="Edit"
                  />
                </List.Accordion>
                <List.Accordion
                  style={styles.displayAccordion}
                  titleStyle={styles.displayAccordionTitle}
                  descriptionStyle={styles.displayAccordionDescription}
                  title="Assessment 5"
                  description="Grade %"
                >
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    title="Instructor"
                    description="Date and Time"
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    titleNumberOfLines={3}
                    title="Objective - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis cursus turpis, et lobortis risus accumsan ut."
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    title="A: []    B: []    C: []"
                    description="Pass"
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={[
                      styles.edit,
                      styles.displayItemDescription,
                    ]}
                    title=""
                    description="Edit"
                  />
                </List.Accordion>
                <List.Accordion
                  style={styles.displayAccordion}
                  titleStyle={styles.displayAccordionTitle}
                  descriptionStyle={styles.displayAccordionDescription}
                  title="Assessment 6"
                  description="Grade %"
                >
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    title="Instructor"
                    description="Date and Time"
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    titleNumberOfLines={3}
                    title="Objective - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis cursus turpis, et lobortis risus accumsan ut."
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    title="A: []    B: []    C: []"
                    description="Pass"
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={[
                      styles.edit,
                      styles.displayItemDescription,
                    ]}
                    title=""
                    description="Edit"
                  />
                </List.Accordion>
                <List.Accordion
                  style={styles.displayAccordion}
                  titleStyle={styles.displayAccordionTitle}
                  descriptionStyle={styles.displayAccordionDescription}
                  title="Assessment 7"
                  description="Grade %"
                >
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    title="Instructor"
                    description="Date and Time"
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    titleNumberOfLines={3}
                    title="Objective - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis cursus turpis, et lobortis risus accumsan ut."
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    title="A: []    B: []    C: []"
                    description="Pass"
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={[
                      styles.edit,
                      styles.displayItemDescription,
                    ]}
                    title=""
                    description="Edit"
                  />
                </List.Accordion>
                <List.Accordion
                  style={styles.displayAccordion}
                  titleStyle={styles.displayAccordionTitle}
                  descriptionStyle={styles.displayAccordionDescription}
                  title="Assessment 8"
                  description="Grade %"
                >
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    title="Instructor"
                    description="Date and Time"
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    titleNumberOfLines={3}
                    title="Objective - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis cursus turpis, et lobortis risus accumsan ut."
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={styles.displayItemDescription}
                    title="A: []    B: []    C: []"
                    description="Pass"
                  />
                  <List.Item
                    style={styles.displayItemStyle}
                    titleStyle={styles.displayItemTitle}
                    descriptionStyle={[
                      styles.edit,
                      styles.displayItemDescription,
                    ]}
                    title=""
                    description="Edit"
                  />
                </List.Accordion>
              </View>
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
