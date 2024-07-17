import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Color from "../../../Style/Color";
import AppIcon from "../../components/AppIcon/AppIcon";
const profilePic = require("../../../assets/profilepic.png");

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image source={profilePic} />

      <Text style={styles.name}>Rachel, 33</Text>
      <View style={styles.View}>
        <Pressable style={styles.container1}>
          <View style={styles.settingsbg}>
            <AppIcon name="settings" width={15.14} height={14.84} />
          </View>
          <Text style={styles.text}>SETTINGS</Text>
        </Pressable>
        <Pressable style={styles.container1}>
          <View style={styles.editProfile}>
            <AppIcon name="pencil" size={19.97} />
          </View>
          <Text style={styles.text}>EDIT PROFILE</Text>
        </Pressable>
        <Pressable style={styles.container1}>
          <View style={styles.settingsbg}>
            <AppIcon name="safety" width={15.14} height={14.84} />
          </View>
          <Text style={styles.text}>SAFETY</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    flex: 1,
    alignItems: "center",
  },
  View: {
    flexDirection: "row",
    marginTop: 15.71,
    gap: 34.79
  },
  border: {
    alignItems: "center",
    borderWidth: 2,
    width: 200.87,
    height: 200.87,
    borderRadius: 200.87,
    backgroundColor: Color.white,
    borderColor: Color.gray,
  },
  name: {
    marginTop: 22.17,
    fontSize: 27.54,
    fontFamily: "InterSemiBold",
    color: Color.black,
  },
  settingsbg: {
    backgroundColor: Color.white,
    shadowColor: "#000",
    width: 47.7,
    height: 47.7,
    borderRadius: 47.7,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  container1: {
    alignItems: "center",
    gap: 12.43,
  },
  text: {
    color: Color.gray2,
    fontSize: 13.44,
    fontFamily: "InterSemiBold",
  },
  scrollview: {
    gap: 34.79,
  },
  editProfile: {
    backgroundColor: Color.white,
    shadowColor: "#000",
    width: 68.86,
    height: 68.86,
    borderRadius: 68.86,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
