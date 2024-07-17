import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../Style/Color";

const Interests = () => {
  return (
    <View>
      <Pressable style={styles.buttons}>
        <Text style={styles.buttonText}>90s Kid</Text>
      </Pressable>
      <Pressable style={styles.buttons}>
        <Text>Harry Potter</Text>
      </Pressable>
      <Pressable style={styles.buttons}>
        <Text>SoundCloud</Text>
      </Pressable>
      <Pressable style={styles.buttons}>
        <Text>Spa</Text>
      </Pressable>
      <Pressable style={styles.buttons}>
        <Text>Self Care</Text>
      </Pressable>
      <Pressable>
        <Text>Heavy Metal</Text>
      </Pressable>
      <Pressable>
        <Text>House Parties</Text>
      </Pressable>
      <Pressable>
        <Text>Gin Tonic</Text>
      </Pressable>
      <Pressable>
        <Text>Gymnastics</Text>
      </Pressable>
      <Pressable>
        <Text>Hapkido</Text>
      </Pressable>
      <Pressable>
        <Text>Hot Yoga</Text>
      </Pressable>
    </View>
  );
};

export default Interests;

const styles = StyleSheet.create({
  buttons: {
    borderWidth: 1,
    borderColor: Color.gray1,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 14.98,
    fontFamily: "InterBold",
    color: Color.gray1,
    textAlign: "center",
  },
});
