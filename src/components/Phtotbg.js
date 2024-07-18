import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Color from "../../Style/Color";
import AppIcon from "./AppIcon/AppIcon";

const photoImg = require("../../assets/Image.png");

const Phtotbg = () => {
  return (
    <View>
      <View style={styles.photos}>
        <View>
          <Image source={photoImg} />
          <Pressable style={styles.Xbutton}>
            <AppIcon name="gradientx" color={Color.white} size={15} />
          </Pressable>
        </View>

        <Pressable style={styles.noPhoto}>
          <LinearGradient
            colors={["#EA4080", "#EE805F"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.gradientbutton}
          >
            <AppIcon name="plus" color={Color.white} size={15} />
          </LinearGradient>
        </Pressable>
        <Pressable style={styles.noPhoto}>
          <LinearGradient
            colors={["#EA4080", "#EE805F"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.gradientbutton}
          >
            <AppIcon name="plus" color={Color.white} size={15} />
          </LinearGradient>
        </Pressable>
      </View>
      <View style={styles.photos}>
        <Pressable style={styles.noPhoto}>
          <LinearGradient
            colors={["#EA4080", "#EE805F"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.gradientbutton}
          >
            <AppIcon name="plus" color={Color.white} size={15} />
          </LinearGradient>
        </Pressable>
        <Pressable style={styles.noPhoto}>
          <LinearGradient
            colors={["#EA4080", "#EE805F"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.gradientbutton}
          >
            <AppIcon name="plus" color={Color.white} size={15} />
          </LinearGradient>
        </Pressable>
        <Pressable style={styles.noPhoto}>
          <LinearGradient
            colors={["#EA4080", "#EE805F"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.gradientbutton}
          >
            <AppIcon name="plus" color={Color.white} size={15} />
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
};

export default Phtotbg;

const styles = StyleSheet.create({
  noPhoto: {
    backgroundColor: Color.gray1,
    height: 145,
    width: 103,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#00000010",
  },
  photos: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "center",
  },
  gradientbutton: {
    width: 31,
    height: 31,
    borderRadius: 31,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: -5,
    right: -5,
  },
  Xbutton: {
    backgroundColor: Color.white,
    width: 31,
    height: 31,
    borderRadius: 31,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: -5,
    right: -5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
