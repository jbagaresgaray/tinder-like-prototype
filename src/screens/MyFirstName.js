import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import AppIcon from "../components/AppIcon/AppIcon";
import Color from "../../Style/Color";
import Buttons from "../components/Buttons";

const { width } = Dimensions.get("window");

const MyFirstName = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={0.1}
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
        <Text style={styles.text}>My first{"\n"}name is</Text>
        <TextInput style={styles.input} />
        <Text style={styles.belowText}>
          This is how it will appear in Tinder and you will not be able to
          change it
        </Text>
        <Buttons
          label="CONTINUE"
          onPress={() => navigation.navigate("MyBDay")}
        />
      </View>
    </View>
  );
};

export default MyFirstName;

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
  },
  bar: {},
  container2: {
    paddingTop: 14.78,
    paddingHorizontal: 24.86,
  },
  text: {
    color: Color.black,
    fontSize: 38.29,
    fontFamily: "InterSemiBold",
    paddingLeft: 50,
    textAlign: "left",
  },
  input: {
    borderBottomWidth: 2,
    borderColor: Color.gray,
    alignItems: "center",
    marginTop: 74.69,
    // marginLeft: 50,
    // marginRight: 80.62,

    fontSize: 19,
    lineHeight: 23,
    fontFamily: "InterSemiBold",
    width: width - 60,
  },
  belowText: {
    marginTop: 12.43,
    color: Color.gray,
    marginHorizontal: 50,
  },
});
