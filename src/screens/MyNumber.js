import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Color from "../../Style/Color";
import { LinearGradient } from "expo-linear-gradient";
import CountryPicker from "react-native-country-picker-modal";

const MyNumber = ({ navigation }) => {
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
        {/* {country && (
          <>
            <Text>{country.cca2}</Text>
            <Text>{country.callingCode}</Text>
          </>
        )} */}
        <View style={styles.input}>
          <TextInput placeholder="00000000000" textAlignVertical="top" keyboardType="numeric" />
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
    flex: 1,
    fontSize: 15
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
  callingcode: {
    color: Color.black1,
    fontSize: 15,
    fontFamily: "InterRegular",
    borderColor: Color.gray,
  },
});
