import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import Color from "../../Style/Color";
import { LinearGradient } from "expo-linear-gradient";
import Buttons from "../components/Buttons";

const photoImage = require("../../assets/Photo.png");
const Tutorial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={photoImage}
        resizeMode="cover"
        style={{
          height: 611,
          width: "100%",
        }}
      >
        <View style={styles.container2}>
          <Text style={styles.title}>Let's get you ready!</Text>
          <Text style={styles.text}>Here's everything you need to know</Text>
          <View style={styles.buttonL}>
            <Buttons
              label="START TUTORIAL"
              onPress={() => navigation.navigate("TabStack")}
            />
          </View>
          <Pressable onPress={() => navigation.navigate("TabStack")}>
            <Text style={styles.skip}>SKIP</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Tutorial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  buttonL: {
    marginTop: 20,
    paddingHorizontal: 40,
    width: "100%",
  },
  text: {
    color: Color.black,
    fontFamily: "InterRegular",
    fontSize: 15,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18.14,
    fontFamily: "InterBold",
    color: Color.white,
  },
  container2: {
    alignItems: "center",
    flex: 0.5,
    elevation: 150,
    marginTop: 200,
  },
  title: {
    color: Color.white,
    fontSize: 25,
    fontFamily: "InterBold",
  },
  skip: {
    color: Color.gray,
    fontSize: 17,
    fontFamily: "InterRegular",
    marginTop: 19,
  },
});
