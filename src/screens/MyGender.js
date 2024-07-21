import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import * as Progress from "react-native-progress";
import AppIcon from "../components/AppIcon/AppIcon";
import Color from "../../Style/Color";
import Footer from "../components/Footer";
import { SafeAreaView } from "react-native-safe-area-context";
const MyGender = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Progress.Bar
        progress={0.4}
        color="#EA4080"
        width={null}
        borderRadius={0}
        unfilledColor="#D9D9D9"
        height={4.7}
        style={styles.bar}
      />
      <View style={styles.container2}>
        <Pressable onPress={() => navigation.goBack()}>
          <AppIcon name="back" color={Color.gray} height={18.14} width={9.07} />
        </Pressable>
        <Text style={styles.text}>I am a </Text>
      </View>
      <View style={styles.buttons}>
        <Pressable style={styles.buttonL}>
          <Text style={styles.buttonText}>WOMAN</Text>
        </Pressable>
        <Pressable style={styles.buttonL}>
          <Text style={styles.buttonText}>MAN</Text>
        </Pressable>
      </View>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default MyGender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    paddingTop: Platform.OS === "android" ? 45 : 0,
  },
  container2: {
    paddingTop: 14.78,
    paddingHorizontal: 24.86,
  },
  container3: {
    marginTop: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Color.black,
    fontSize: 38.29,
    fontFamily: "InterSemiBold",
    paddingLeft: 50,
    textAlign: "left",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: Color.gray,
    alignItems: "center",
    marginTop: 74.69,
    marginLeft: 50,
    marginRight: 80.62,
  },

  buttonL: {
    borderRadius: 67.18,
    borderWidth: 2,
    borderColor: Color.gray,
    paddingVertical: 14,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18.14,
    fontFamily: "InterSemiBold",
    color: Color.gray,
  },
  buttons: {
    gap: 20,
    marginHorizontal: 40,
    marginTop: 90,
    flex: 1,
  },
  button: {
    borderRadius: 67.18,
    paddingVertical: 14,
    backgroundColor: "#00000010",
    marginHorizontal: 40,
    marginTop: 20,
  },
  footertext: {
    color: Color.black,
    fontSize: 13,
    fontFamily: "InterRegular",
    lineHeight: 17.1,
  },
});
