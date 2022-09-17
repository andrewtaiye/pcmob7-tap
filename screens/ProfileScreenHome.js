import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Fragment } from "react";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { PROFILE_SCREEN } from "../constants";

export default function ProfileScreenHome() {
  const navigation = useNavigation();
  const addBtn = require("../assets/add_btn.png");
  const exitBtn = require("../assets/exit_btn.png");

  return (
    // Fragment is used to split the SafeAreaView so that the top and bottom can be styled differently.
    <Fragment>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: "#004BA0" }}
      ></SafeAreaView>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#1976D2" }}>
        <View style={styles.titleHeader}>
          <Text style={styles.title}>PROFILE</Text>
          <Image source={exitBtn} />
        </View>
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <View>
              <Text style={styles.welcomeText}>Welcome Back</Text>
              <Text style={styles.username}>John Doe</Text>
            </View>
            <View style={styles.profileImage}></View>
          </View>
          <View style={styles.displayContainer}>
            <View style={styles.displayHeader}>
              <Text style={styles.displayHeaderText}>ROLES</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(PROFILE_SCREEN.Add);
                }}
              >
                <Image style={styles.logoTitle} source={addBtn} />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <View style={styles.displayAssessments}>
                <List.Item
                  style={styles.displayItemStyle}
                  titleStyle={styles.displayItemTitle}
                  descriptionStyle={styles.displayItemDescription}
                  onPress={() => {
                    navigation.navigate(PROFILE_SCREEN.Update);
                  }}
                  title="Role 1"
                  description="Passing Date"
                />
                <List.Item
                  style={styles.displayItemStyle}
                  titleStyle={styles.displayItemTitle}
                  descriptionStyle={styles.displayItemDescription}
                  title="Role 2"
                  description="Passing Date"
                />
                <List.Item
                  style={styles.displayItemStyle}
                  titleStyle={styles.displayItemTitle}
                  descriptionStyle={styles.displayItemDescription}
                  title="Role 3"
                  description="Passing Date"
                />
                <List.Item
                  style={styles.displayItemStyle}
                  titleStyle={styles.displayItemTitle}
                  descriptionStyle={styles.displayItemDescription}
                  title="Role 4"
                  description="Passing Date"
                />
                <List.Item
                  style={styles.displayItemStyle}
                  titleStyle={styles.displayItemTitle}
                  descriptionStyle={styles.displayItemDescription}
                  title="Role 5"
                  description="Passing Date"
                />
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
  profileContainer: {
    width: "100%",
    marginVertical: 34,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  welcomeContainer: {},
  welcomeText: {
    marginBottom: 8,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  username: {
    color: "white",
    fontSize: 24,
  },
  profileImage: {
    marginLeft: 20,
    width: "50%",
    height: 200,
    backgroundColor: "white",
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
  displayItemStyle: {
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#004BA0",
  },
  displayItemTitle: {
    fontSize: 20,
    marginLeft: -5,
  },
  displayItemDescription: {
    fontSize: 20,
    textAlign: "right",
    marginTop: -20,
  },
});
