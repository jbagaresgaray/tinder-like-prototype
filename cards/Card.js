import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppIcon from "../src/components/AppIcon/AppIcon";
import Color from "../Style/Color";
const photoCard = require("../assets/Photo.png");

const Card = ({ name, photo, age }) => {
  return (
    <View style={styles.container}>
      <Image source={photoCard} resizeMode="cover" style={styles.image} />
      <View style={styles.container2}>
        <Text style={styles.name}>
          Paulo <Text style={styles.age}>29</Text>
        </Text>
        <View style={styles.livesIn}>
          <AppIcon name="house-outline" size={12} />
          <Text style={styles.location}>Lives in Alfama</Text>
        </View>
        <View style={styles.locationView}>
          <AppIcon name="location-outline" size={12} />
          <Text style={styles.location}>1 kilometer away</Text>
        </View>
      </View>
      <Pressable style={styles.info}>
        <AppIcon name="info" width={5} height={20} />
      </Pressable>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: Color.white,
  },
  container2: {
    position: "absolute",
    bottom: 130,
    left: 16,
  },
  image: {
    width: "100%",
    height: "95%",
    borderRadius: 10.75,
  },
  name: {
    fontFamily: "InterSemiBold",
    fontSize: 38,
    color: Color.white,
  },
  age: {
    fontFamily: "InterRegular",
    fontSize: 24.86,
  },
  location: {
    color: Color.white,
    fontSize: 16.12,
    fontFamily: "InterRegular",
  },
  info: {
    backgroundColor: Color.white,
    width: 26.87,
    height: 26.87,
    borderRadius: 26.87,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 15.45,
    bottom: 130,
  },
  locationView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3.7,
  },
  livesIn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3.7,
  },
});
