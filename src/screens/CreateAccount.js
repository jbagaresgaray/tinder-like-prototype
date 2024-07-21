import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../Style/Color";
import AppIcon from "../components/AppIcon/AppIcon";
import Buttons from "../components/Buttons";

const CreateAccount = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <AppIcon name="coloredfire" width={32.58} height={38.8} />
      </View>
      <Text style={styles.ops}>Oops!</Text>
      <Text style={styles.text}>
        We couldn’t find a Tinder account connected to that Facebook Account.
      </Text>
      <Buttons
        label="CREATE NEW ACCOUNT"
        onPress={() => navigation.navigate("MyNumber")}
      />
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    flex: 1,
    paddingHorizontal: 31.24,
  },
  icon: {
    alignItems: "center",
  },
  ops: {
    color: Color.black,
    fontSize: 29.56,
    fontFamily: "InterBold",
    textAlign: "center",
    marginTop: 90.69,
  },
  text: {
    color: Color.gray,
    fontSize: 19.48,
    textAlign: "center",
    fontFamily: "InterMedium",
    lineHeight: 25.2,
    marginTop: 52,
  },
  button: {
    paddingVertical: 14,
  },
  buttonL: {
    borderRadius: 67.18,
    marginTop: 100,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18.14,
    fontFamily: "InterBold",
    color: Color.white,
  },
});
