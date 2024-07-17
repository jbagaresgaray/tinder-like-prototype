import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import { LinearGradient } from "expo-linear-gradient";
import AppIcon from "../components/AppIcon/AppIcon";
import Color from "../../Style/Color";

const MyBDay = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={0.2}
        color="#EA4080"
        width={null}
        borderRadius={0}
        unfilledColor="#D9D9D9"
        height={4.7}
        style={styles.bar}
      />
      <View style={styles.container2}>
        <Pressable onPress={() => navigation.goBack()}>
          <AppIcon name="close" color={Color.gray} size={18.47} />
        </Pressable>
        <Text style={styles.text}>My{"\n"}birthday is</Text>
        <View style={styles.inputView}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Y"
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Y"
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Y"
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Y"
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="M"
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="M"
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="D"
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="D"
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
        </View>
        <Text style={styles.info}>Your age will be public.</Text>

        <Pressable
          onPress={() => navigation.navigate("MyGender")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>CONTINUE</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MyBDay;

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    flex: 1,
    backgroundColor: Color.white
  },
  container2: {
    paddingTop: 14.78,
    paddingHorizontal: 24.86,
  },
  text: {
    color: Color.black,
    fontSize: 38.29,
    fontFamily: "InterSemiBold",
    paddingLeft: 50,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: Color.gray,
    alignItems: "center",
    marginTop: 74.69,
    marginLeft: 50,
    marginRight: 80.62,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 67.18,
    backgroundColor: "#EBECEF",
    marginTop: 38.33,
  },
  buttonL: {
    borderRadius: 67.18,
    marginTop: 100,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18.14,
    fontFamily: "InterBold",
    color: Color.gray,
  },
  info: {
    color: Color.gray,
    fontSize: 13.19,
    fontFamily: "InterMedium",
    lineHeight: 17.1,
    paddingLeft: 50,
    marginTop: 12.12,
  },
  input: {
    borderBottomWidth: 2,
    width: 20,
    borderColor: Color.gray,
    color: Color.black,
    fontSize: 19.1,
    fontFamily: "InterRegular",
    textAlign: "center",
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingLeft: 50,
    marginTop: 75,
  },
});
