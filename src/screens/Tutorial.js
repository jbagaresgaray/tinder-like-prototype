import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../Style/Color";
import TabStack from "../navigator/TabStack";
import { LinearGradient } from "expo-linear-gradient";

const Tutorial = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's get you ready!</Text>
      <Text style={styles.text}>Here's everything you need to know</Text>
      <LinearGradient
        colors={["#EA4080", "#EE805F"]}
        start={[1, 1]}
        end={[0, 0]}
        style={styles.buttonL}
      >
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>START TUTORIAL</Text>
        </Pressable>
      </LinearGradient>
      <Pressable onPress={() => navigation.navigate("TabStack")} >
        <Text style={styles.skip}>SKIP</Text>
      </Pressable>
    </View>
  );
};

export default Tutorial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    alignItems: "center",
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 70
  },
  buttonL: {
    borderRadius: 67.18,
    marginTop: 100,

  },
  text: {
    color: Color.black,
    fontFamily: "InterRegular",
    fontSize: 15,
    marginTop: 20
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18.14,
    fontFamily: "InterBold",
    color: Color.white,
  },
  title: {
    color: Color.black,
    fontSize: 25,
    fontFamily: "InterBold",

  },
  skip: {
    color: Color.gray,
    fontSize: 17,
    fontFamily: "InterRegular",
    marginTop: 19
  },
});
