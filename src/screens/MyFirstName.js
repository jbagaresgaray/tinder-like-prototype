import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import AppIcon from "../components/AppIcon/AppIcon";
import Color from "../../Style/Color";
import { LinearGradient } from "expo-linear-gradient";

const MyFirstName = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={0.1}
        color="#EA4080"
        width={null}
        borderRadius={0}
        unfilledColor="#D9D9D9"
        height={4.7}
        style={styles.bar}
      />
      <View style={styles.container2}>
        <Pressable onPress={() => navigation.goBack()}>
          <AppIcon name="close" color={Color.gray} size={18.47} />
        </Pressable>
        <Text style={styles.text}>My first{"\n"}name is</Text>
        <TextInput style={styles.input} />
        <Text style={styles.belowText}>
          This is how it will appear in Tinder and you will not be able to
          change it
        </Text>
        <LinearGradient
          colors={["#EA4080", "#EE805F"]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.buttonL}
        >
          <Pressable
            onPress={() => navigation.navigate("MyBDay")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>CONTINUE</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
};

export default MyFirstName;

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
  },
  bar: {},
  container2: {
    paddingTop: 14.78,
    paddingHorizontal: 24.86,
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
  button: {
    paddingVertical: 14,
  },
  buttonL: {
    borderRadius: 67.18,
    marginTop: 100,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18.14,
    fontFamily: "InterBold",
    color: Color.white,
  },
  belowText: {
    marginTop: 12.43,
    color: Color.gray,
    marginHorizontal: 50,
  },
});
