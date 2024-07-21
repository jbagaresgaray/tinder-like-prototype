import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import AppIcon from "../components/AppIcon/AppIcon";
import Color from "../../Style/Color";
import Phtotbg from "../components/Phtotbg";
import Buttons from "../components/Buttons";

const AddPhotos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={0.8}
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
      </View>
      <View style={styles.container3}>
        <Text style={styles.title}>Add photos</Text>
        <Text style={styles.text}>Add at least 2 photos to continue</Text>
      </View>
      <Phtotbg />
      <View
        style={{
          flex: 1,
        }}
      />
      <View style={styles.FooterView}>
        <Buttons
          label="CONTINUE"
          onPress={() => navigation.navigate("WelcomeScreen")}
        />
      </View>
    </View>
  );
};

export default AddPhotos;

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    flex: 1,
    backgroundColor: Color.white,
    position: "relative",
  },
  container2: {
    paddingTop: 14.78,
    paddingHorizontal: 24.86,
  },
  container3: {
    marginLeft: 66,
    marginRight: 85,
  },
  title: {
    color: Color.black,
    fontSize: 38.29,
    fontFamily: "InterSemiBold",
    textAlign: "left",
  },
  text: {
    color: Color.gray,
    fontSize: 13.19,
    fontFamily: "InterMedium",
    lineHeight: 17.1,
  },
  button: {
    borderRadius: 67.18,
    paddingVertical: 14,
    backgroundColor: "#00000010",
    marginTop: 100,
    marginHorizontal: 40,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18.14,
    fontFamily: "InterBold",
    color: Color.gray,
  },
  FooterView: {
    marginHorizontal: 40,
    marginBottom: 40,
  },
});
