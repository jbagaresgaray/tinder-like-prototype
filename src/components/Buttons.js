import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Color from "../../Style/Color";

const Buttons = ({ label, onPress, outline = false }) => {
  if (outline) {
    return (
      <Pressable style={styles.buttonOutline} onPress={onPress}>
        <Text style={styles.buttonOutlineText}>{label}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPress} style={styles.buttonL}>
      <LinearGradient
        colors={["#EA4080", "#EE805F"]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  buttonL: {
    borderRadius: 67.18,
    overflow: "hidden",
  },
  button: {
    paddingVertical: 14,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18.14,
    fontFamily: "InterBold",
    color: Color.white,
    textTransform: "uppercase",
  },

  buttonOutline: {
    paddingVertical: 16.12,
    borderWidth: 1,
    borderRadius: 67.18,
    borderColor: Color.white,
  },
  buttonOutlineText: {
    color: Color.white,
    fontSize: 14.78,
    fontFamily: "InterSemiBold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
