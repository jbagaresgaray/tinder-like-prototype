import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Color from "../../Style/Color";
import { LinearGradient } from "expo-linear-gradient";
import CountryPicker from "react-native-country-picker-modal";

const MyNumber = ({ navigation }) => {
  const [country, setCountry] = useState(null);

  const onSelect = (selectedCountry) => {
    setCountry(selectedCountry);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.MyNumber}>My number is</Text>

      <View style={{ flexDirection: "row", gap: 11.08 }}>
        {/* <Text>KR +82</Text> */}
        <CountryPicker
          withFlag
          withFilter
          withCountryNameButton
          withAlphaFilter
          withCallingCode
          onSelect={onSelect}
        />
        {country && (
          <>
            <Text>Selected Country: {country.name}</Text>
            <Text>Selected Country: {country.callingCode}</Text>
          </>
        )}
        <TextInput placeholder="00000000000" style={styles.input} />
      </View>
      <Text style={styles.text}>
        We will send a text with a verification code. Message and data rates may
        apply.
        <Text style={styles.underlinedtext}>
          {" "}
          Learn what happens when your number changes.
        </Text>
      </Text>

      <LinearGradient
        colors={["#EA4080", "#EE805F"]}
        start={[0, 0]}
          end={[1, 1]}
        style={styles.buttonL}
      >
        <Pressable
          onPress={() => navigation.navigate("MyCode")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>CONTINUE</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default MyNumber;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    flex: 1,
    paddingHorizontal: 39.64,
  },
  MyNumber: {
    color: Color.black,
    fontSize: 38.29,
    fontFamily: "InterSemiBold",
  },
  input: {
    borderBottomWidth: 1,
  },
  text: {
    color: Color.gray,
    fontSize: 13.59,
    fontFamily: "InterRegular",
    marginTop: 44,
  },
  underlinedtext: {
    color: Color.black,
    textDecorationLine: "underline",
  },
  buttonL: {
    borderRadius: 67.18,
    marginTop: 100,
  },
  button: {
    paddingVertical: 14,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18.14,
    fontFamily: "InterBold",
    color: Color.white,
  },
});
