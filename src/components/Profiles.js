import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
const Image = require("../../assets/Image.png");

const Profiles = () => {
  return (
    <View>
      <ImageBackground source={Image}></ImageBackground>
    </View>
  );
};

export default Profiles;

const styles = StyleSheet.create({});
