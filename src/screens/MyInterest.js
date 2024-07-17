import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import AppIcon from "../components/AppIcon/AppIcon";
import Color from "../../Style/Color";
import Footer from "../components/Footer";

const MyInterest = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={0.7}
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
        <Pressable onPress={() => navigation.navigate("AddPhotos")}>
          <Text style={styles.skip}>SKIP</Text>
        </Pressable>
      </View>
      <View style={styles.container3}>
        <Text style={styles.text}>Interests </Text>
        <Text style={styles.info}>
          Let everyone know what you’re interested in by adding it to your
          profile.
        </Text>
      </View>
      <Pressable onPress={() => navigation.navigate("AddPhotos")} style={styles.button}>
        <Text style={styles.buttonText}>CONTINUE 2/5</Text>
      </Pressable>
    </View>
  );
};

export default MyInterest;

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    flex: 1,
    backgroundColor: Color.white,
  },
  container2: {
    paddingTop: 14.78,
    paddingHorizontal: 24.86,
  },
  container3: {
    marginLeft: 66,
  },
  text: {
    color: Color.black,
    fontSize: 38.29,
    fontFamily: "InterSemiBold",
    // paddingLeft: 50,
    textAlign: "left",
  },
  skip: {
    color: "#00000020",
    fontSize: 19.1,
    fontFamily: "InterRegular",
    textAlign: "right",
  },
  info: {
    color: Color.gray1,
    fontSize: 13.19,
    fontFamily: "InterMedium",
    lineHeight: 17.1,

    marginTop: 16,
  },
  button: {
    borderRadius: 67.18,
    paddingVertical: 14,
    backgroundColor: "#EBECEF",
   marginHorizontal: 40,
   
    
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18.14,
    fontFamily: "InterBold",
    color: Color.gray,
  },
});
