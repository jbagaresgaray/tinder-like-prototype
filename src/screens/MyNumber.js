import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Color from "../../Style/Color";
// import { CountryPicker } from "react-native-country-codes-picker";
import Buttons from "../components/Buttons";
import CountryPicker from "react-native-country-picker-modal";

const MyNumber = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState({
    cca2: "US",
    currency: ["USD"],
    flag: "flag-us",
    name: "United States",
    region: "Americas",
    subregion: "North America",
    callingCode: ["1"],
  });

  const onSelect = (selectedCountry) => {
    setCountry(selectedCountry);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.MyNumber}>My number is</Text>

      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          gap: 11.08,
        }}
      >
        <CountryPicker
          withFlag
          withCallingCode
          withFilter
          withFlagButton
          onSelect={onSelect}
          countryCode={country?.cca2}
          withCountryNameButton={false}
          renderFlagButton={(props) => (
            <Pressable
              onPress={props.onOpen}
              style={{ borderBottomWidth: 1, height: "100%" }}
            >
              <Text style={styles.callingcode}>
                {country.cca2} +{country.callingCode}
              </Text>
            </Pressable>
          )}
        />
        <View style={styles.input}>
          <TextInput
            placeholder="00000000000"
            textAlignVertical="top"
            keyboardType="numeric"
            style={styles.textInput}
          />
        </View>
      </View>
      <Text style={styles.text}>
        We will send a text with a verification code. Message and data rates may
        apply.
        <Text style={styles.underlinedtext}>
          {" "}
          Learn what happens when your number changes.
        </Text>
      </Text>

      <Buttons label="CONTINUE" onPress={() => navigation.navigate("MyCode")} />
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
    marginBottom: 15,
  },
  input: {
    borderBottomWidth: 1,
    flex: 1,
    fontSize: 15,
  },
  text: {
    color: Color.gray,
    fontSize: 13.59,
    fontFamily: "InterRegular",
    marginTop: 44,
  },
  textInput: {
    fontSize: 19,
    lineHeight: 23,
    fontFamily: "InterRegular",
    color: Color.black1,
  },
  underlinedtext: {
    color: Color.black,
    textDecorationLine: "underline",
  },

  callingcode: {
    color: Color.black1,
    fontSize: 16,
    lineHeight: 18,
    fontFamily: "InterRegular",
    borderColor: Color.gray,
  },
});
