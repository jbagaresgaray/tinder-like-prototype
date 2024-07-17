import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../Style/Color";
import AppIcon from "../components/AppIcon/AppIcon";
import { LinearGradient } from "expo-linear-gradient";

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppIcon name="coloredfire" size={29} />
        <Text style={styles.title}>Welcome to Tinder.</Text>
        <Text style={styles.text}>Please follow these House Rules.</Text>
      </View>
      <View style={styles.container2}>
        <View>
          <View style={styles.view}>
            <AppIcon name="check" />
            <Text style={styles.boldtext}>Be yourself.</Text>
          </View>
          <Text style={styles.graytext}>
            Make sure your photos, age, and bio are true to who you are.
          </Text>
        </View>
        <View>
          <View style={styles.view}>
            <AppIcon name="check" />
            <Text style={styles.boldtext}>Stay safe.</Text>
          </View>
          <Text style={styles.graytext}>
            Don’t be too quick to give out personal information. Date Safely
          </Text>
        </View>
        <View>
          <View style={styles.view}>
            <AppIcon name="check" />
            <Text style={styles.boldtext}>Play it cool.</Text>
          </View>
          <Text style={styles.graytext}>
            Respect others and treat them as you would like to be treated.
          </Text>
        </View>
        <View>
          <View style={styles.view}>
            <AppIcon name="check" />
            <Text style={styles.boldtext}>Be proactive.</Text>
          </View>
          <Text style={styles.graytext}>Always report bad behavior.</Text>
        </View>
        <LinearGradient
          colors={["#EA4080", "#EE805F"]}
          start={[1, 1]}
          end={[0, 0]}
          style={styles.buttonL}
        >
          <Pressable onPress={() => navigation.navigate("Tutorial")} style={styles.button}>
            <Text style={styles.buttonText}>I AGREE</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container2: {
    marginLeft: 47,
    marginRight: 30,
    marginTop: 45,
    gap: 23,
  },
  header: {
    alignItems: "center",
    gap: 8,
  },
  title: {
    color: Color.black,
    fontSize: 22,
    fontFamily: "InterBold",
  },
  text: {
    color: Color.gray,
    fontSize: 14.44,
    fontFamily: "InterSemiBold",
    lineHeight: 18.1,
  },
  view: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  boldtext: {
    color: Color.black,
    fontSize: 16,
    fontFamily: "InterBold",
    lineHeight: 22.6,
  },
  graytext: {
    color: Color.gray,
    fontFamily: "InterSemiBold",
    fontSize: 14,
    lineHeight: 24,
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
});
