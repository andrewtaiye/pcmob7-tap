import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Fragment, useState } from "react";
import ModalDropdown from "react-native-modal-dropdown";
import { List } from "react-native-paper";

export default function AssessmentScreenHome() {
  return (
    // Fragment is used to split the SafeAreaView so that the top and bottom can be styled differently.
    <Fragment>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: "#004BA0" }}
      ></SafeAreaView>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#1976D2" }}>
        <View style={styles.titleHeader}>
          <Text style={styles.title}>ASSESSMENTS</Text>
          <Text style={styles.title}>icon</Text>
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
              options={["Role1", "Role2", "Role3", "Role4", "Role5"]}
            />
          </View>
          <View style={styles.displayContainer}>
            <View style={styles.displayHeader}>
              <Text style={styles.displayHeaderText}>ROLE</Text>
              <Text>Icon</Text>
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
                    descriptionStyle={styles.displayItemDescription}
                    title="Edit"
                    description="Delete"
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
                    descriptionStyle={styles.displayItemDescription}
                    title="Edit"
                    description="Delete"
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
                    descriptionStyle={styles.displayItemDescription}
                    title="Edit"
                    description="Delete"
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
                    descriptionStyle={styles.displayItemDescription}
                    title="Edit"
                    description="Delete"
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
                    descriptionStyle={styles.displayItemDescription}
                    title="Edit"
                    description="Delete"
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
                    descriptionStyle={styles.displayItemDescription}
                    title="Edit"
                    description="Delete"
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
                    descriptionStyle={styles.displayItemDescription}
                    title="Edit"
                    description="Delete"
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
                    descriptionStyle={styles.displayItemDescription}
                    title="Edit"
                    description="Delete"
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
});
