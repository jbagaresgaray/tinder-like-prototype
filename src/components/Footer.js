import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Color from "../../Style/Color";
import CheckBox from "react-native-check-box";

const Footer = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.container3}>
        <CheckBox
          onClick={() => {
            setToggleCheckBox(!toggleCheckBox);
          }}
          isChecked={toggleCheckBox}
          checkBoxColor={Color.black}
          checkedCheckBoxColor={Color.black}
        />
        <Text style={styles.footertext}>Show my gender on my profile</Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate("MyInterest")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>CONTINUE</Text>
      </Pressable>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
    gap: 37,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
  },
  container3: {
    marginTop: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 67.18,
    paddingVertical: 14,
    backgroundColor: "#EBECEF",
    paddingHorizontal: 108.16,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18.14,
    fontFamily: "InterBold",
    color: Color.gray,
  },
  footertext: {
    color: Color.black,
    fontSize: 13,
    fontFamily: "InterRegular",
    lineHeight: 17.1,
  },
});
