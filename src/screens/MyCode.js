import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import Color from "../../Style/Color";
import Buttons from "../components/Buttons";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 6;

const MyCode = ({ navigation }) => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Code is</Text>
      <Text style={styles.number}>00000000000</Text>
      <View style={styles.inputView}>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={Platform.select({
            android: "sms-otp",
            default: "one-time-code",
          })}
          testID="my-code-input"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
      <View
        style={{
          marginTop: 100,
        }}
      >
        <Buttons
          label="CONTINUE"
          onPress={() => navigation.navigate("MyFirstName")}
        />
      </View>
    </View>
  );
};

export default MyCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    paddingHorizontal: 40.64,
  },
  text: {
    color: Color.black,
    fontSize: 38.29,
    fontFamily: "InterSemiBold",
  },
  number: {
    color: Color.black,
    fontSize: 19,
    lineHeight: 24,
    fontFamily: "InterRegular",
    marginTop: 15.13,
  },

  buttonText: {
    textAlign: "center",
    fontSize: 18.14,
    fontFamily: "InterBold",
    color: "#E9EBF0",
  },
  button: {
    backgroundColor: Color.white,
    marginTop: 197.17,
    paddingVertical: 14,
    borderRadius: 67.18,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  input: {
    borderBottomWidth: 2,
    width: 50,
    borderColor: Color.gray,
    color: Color.black,
    fontSize: 50,
    textAlign: "center",
  },
  inputView: {
    marginTop: 79.79,
  },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 50,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 2,
    borderColor: Color.gray,
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
});
