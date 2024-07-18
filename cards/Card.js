import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppIcon from "../src/components/AppIcon/AppIcon";
import Color from "../Style/Color";
const photoCard = require("../assets/Photo.png");

const Card = () => {
  return (
    <View style={styles.container}>
      <Image source={photoCard} resizeMode="cover" style={styles.image} />
      <View
        style={{
          position: "absolute",
          bottom: 100,
          left: 16,
        }}
      >
        <Text style={styles.name}>
          Paulo <Text style={styles.age}>29</Text>
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 3.7 }}>
          <AppIcon name="house-outline" size={12} />
          <Text style={styles.location}>Lives in Alfama</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 3.7 }}>
          <AppIcon name="location-outline" size={12} />
          <Text style={styles.location}>1 kilometer away</Text>
        </View>
        {/* <Pressable
          style={{
            backgroundColor: Color.white,
            width: 26.87,
            height: 26.87,
            borderRadius: 26.87,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: 5
          }}
        >
          <AppIcon name="info" width={5} height={20} />
        </Pressable> */}
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // position: "relative"
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
});
