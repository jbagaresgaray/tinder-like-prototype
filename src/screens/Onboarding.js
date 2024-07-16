import { Pressable, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import AppIcon from "../components/AppIcon/AppIcon";
import { LinearGradient } from "expo-linear-gradient";
import Color from "../../Style/Color";

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#EA4080", "#EE805F"]}
        start={[0.7, 1]}
        end={[2, 0]}
        style={styles.linearbg}
      >
        <AppIcon name="back" size={24} color={"white"} />
        <StatusBar style="auto" />
        <View style={styles.title}>
          <AppIcon name="fire" width={38.4} height={45.11} />
          <AppIcon
            name="title"
            color={Color.white}
            height={44.5}
            width={144.79}
          />
        </View>
        <Text style={styles.text}>
          By tapping Create Account or Sign In, you agree to our{" "}
          <Text style={styles.underlinedText}>Terms.</Text> Learn how we process
          your data in our{" "}
          <Text style={styles.underlinedText}>Privacy Policy</Text> and
          <Text style={styles.underlinedText}> Cookies Policy.</Text>
        </Text>
        <View style={styles.buttonView}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>SIGN IN WITH APPLE</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("CreateAccount")} style={styles.button}>
            <Text style={styles.buttonText}>SIGN IN WITH FACEBOOK</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>SIGN IN WITH PHONE NUMBER</Text>
          </Pressable>
        </View>
        <Pressable style={styles.footer}>
          <Text style={styles.footertext}>Trouble Signing In?</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  linearbg: {
    flex: 1,
    paddingTop: 70.2,
    paddingHorizontal: 23.18,
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6.92,
    marginTop: 100,
  },
  text: {
    textAlign: "center",
    color: Color.white,
    marginTop: 86,
    fontSize: 12.43,
    fontFamily: "InterMedium",
    lineHeight: 17.8,
  },
  underlinedText: {
    textDecorationLine: "underline",
  },
  button: {
    paddingVertical: 16.12,

    borderWidth: 1,
    borderRadius: 67.18,
    borderColor: Color.white,
  },
  buttonText: {
    color: Color.white,
    fontSize: 14.78,
    fontFamily: "InterSemiBold",
    textAlign: "center",
  },
  buttonView: {
    marginTop: 26.95,
    gap: 10.75,
  },
  footertext: {
    color: Color.white,
    textAlign: "center",
    fontFamily: "InterMedium",
    fontSize: 14.11,
  },
  footer: {
    marginTop: 20.23,
  },
});
