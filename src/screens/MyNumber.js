import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Color from "../../Style/Color";
import { LinearGradient } from "expo-linear-gradient";

const MyNumber = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.MyNumber}>My number is</Text>

      <View style={{ flexDirection: "row", gap: 11.08 }}>
        <TextInput placeholder="KR +82" style={styles.input} />
        <TextInput placeholder="00000000000" style={styles.input} />
      </View>
      <Text style={styles.text}>
        We will send a text with a verification code. Message and data rates may
        apply.
        <Text style={styles.underlinedtext}>
          {" "}
          Learn what happens when your number changes.
        </Text>
      </Text>
      <LinearGradient
        colors={["#EA4080", "#EE805F"]}
        start={[1, 1]}
        end={[0, 0]}
        style={styles.buttonL}
      >
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>CONTINUE</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default MyNumber;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    flex: 1,
    paddingHorizontal: 39.64,
  },
  MyNumber: {
    color: Color.black,
    fontSize: 38.29,
    fontFamily: "InterSemiBold",
  },
  input: {
    borderBottomWidth: 1,
  },
  text: {
    color: Color.gray,
    fontSize: 13.59,
    fontFamily: "InterRegular",
    marginTop: 44,
  },
  underlinedtext: {
    color: Color.black,
    textDecorationLine: "underline",
  },
  buttonL: {
    borderRadius: 67.18,
    marginTop: 100,
  },
  button: {
    paddingVertical: 14,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18.14,
    fontFamily: "InterBold",
    color: Color.white,
  },
});
