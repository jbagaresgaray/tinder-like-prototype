import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import AppIcon from "../components/AppIcon/AppIcon";
import Color from "../../Style/Color";

const AddPhotos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={0.8}
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
      </View>
      <View style={styles.container3}>
        <Text style={styles.title}>Add photos</Text>
        <Text style={styles.text}>Add at least 2 photos to continue</Text>
      </View>

      <View
        style={{
          marginHorizontal: 50,
          flexDirection: "row",
          marginTop: 27,
          gap: 10,
        }}
      >
        <Pressable
          style={{
            borderWidth: 2,
            borderColor: Color.gray,
            paddingVertical: 8,
            borderRadius: 67.18,
            paddingHorizontal: 12,
          }}
        >
          <Text style={{ textAlign: "center", color: Color.gray }}>
            90s Kid
          </Text>
        </Pressable>
        <Pressable
          style={{
            borderWidth: 2,
            borderColor: Color.gray,
            paddingVertical: 8,
            borderRadius: 67.18,
            paddingHorizontal: 12,
          }}
        >
          <Text style={{ textAlign: "center", color: Color.gray }}>
            Harry Potter
          </Text>
        </Pressable>
        <Pressable
          style={{
            borderWidth: 2,
            borderColor: Color.gray,
            paddingVertical: 8,
            borderRadius: 67.18,
            paddingHorizontal: 12,
          }}
        >
          <Text style={{ textAlign: "center", color: Color.gray }}>
            SoundCloud
          </Text>
        </Pressable>
      </View>

      <Pressable
        onPress={() => navigation.navigate("WelcomeScreen")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>CONTINUE</Text>
      </Pressable>
    </View>
  );
};

export default AddPhotos;

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
    marginRight: 85,
  },
  title: {
    color: Color.black,
    fontSize: 38.29,
    fontFamily: "InterSemiBold",
    // paddingLeft: 50,
    textAlign: "left",
  },
  text: {
    color: Color.gray,
    fontSize: 13.19,
    fontFamily: "InterMedium",
    lineHeight: 17.1,
  },
  button: {
    borderRadius: 67.18,
    paddingVertical: 14,
    backgroundColor: "#00000010",
    marginTop: 100,
    marginHorizontal: 40,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18.14,
    fontFamily: "InterBold",
    color: Color.gray,
  },
});
