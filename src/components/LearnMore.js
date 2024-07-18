import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import Color from "../../Style/Color";
import AppIcon from "./AppIcon/AppIcon";

const LearnMore = () => {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      dotColor={Color.gray1}
      activeDotColor={Color.black}
      dotStyle={styles.dot}
      activeDotStyle={styles.dot}
    >
      <View style={styles.slide1}>
        <View style={styles.title}>
          <AppIcon name="fire" width={24.86} height={29.22} />
          <Text style={styles.titleText}>Tinder Platinum</Text>
        </View>
        <Text style={styles.Text}>
          Level up every action you take on Tinder
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>LEARN MORE</Text>
        </Pressable>
      </View>
      <View style={styles.slide1}>
        <View style={styles.title}>
          <AppIcon name="fire" width={24.86} height={29.22} />
          <Text style={styles.titleText}>Tinder Platinum</Text>
        </View>
        <Text style={styles.Text}>
          Level up every action you take on Tinder
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>LEARN MORE</Text>
        </Pressable>
      </View>
      <View style={styles.slide1}>
        <View style={styles.title}>
          <AppIcon name="fire" width={24.86} height={29.22} />
          <Text style={styles.titleText}>Tinder Platinum</Text>
        </View>
        <Text style={styles.Text}>
          Level up every action you take on Tinder
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>LEARN MORE</Text>
        </Pressable>
      </View>
      <View style={styles.slide1}>
        <View style={styles.title}>
          <AppIcon name="fire" width={24.86} height={29.22} />
          <Text style={styles.titleText}>Tinder Platinum</Text>
        </View>
        <Text style={styles.Text}>
          Level up every action you take on Tinder
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>LEARN MORE</Text>
        </Pressable>
      </View>
      <View style={styles.slide1}>
        <View style={styles.title}>
          <AppIcon name="fire" width={24.86} height={29.22} />
          <Text style={styles.titleText}>Tinder Platinum</Text>
        </View>
        <Text style={styles.Text}>
          Level up every action you take on Tinder
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>LEARN MORE</Text>
        </Pressable>
      </View>
    </Swiper>
  );
};

export default LearnMore;

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    alignItems: "center",
    paddingTop: 31,
  },

  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10.08,
  },
  titleText: {
    fontSize: 27.54,
    fontFamily: "InterSemiBold",
    color: Color.black,
  },
  dot: {
    marginBottom: 100,
  },
  button: {
    position: "absolute",
    backgroundColor: Color.white,
    bottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 81,
    borderRadius: 67.18,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonText: {
    color: Color.black,
    fontSize: 16.79,
    fontFamily: "InterSemiBold",
  },
  Text: {
    color: Color.black,
    fontSize: 16.12,
    fontFamily: "InterRegular",
    marginTop: 13.69,
  },
});
