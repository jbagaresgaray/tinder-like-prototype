import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef, useState } from "react";
import Color from "../../Style/Color";

const MyCode = ({ navigation }) => {
  // const pin1ref = useRef(null);
  // const pin2ref = useRef(null);
  // const pin3ref = useRef(null);
  // const pin4ref = useRef(null);
  // const pin5ref = useRef(null);
  // const pin6ref = useRef(null);

  // const [pin1, setPin1] = useState(null);
  // const [pin2, setPin2] = useState(null);
  // const [pin3, setPin3] = useState(null);
  // const [pin4, setPin4] = useState(null);
  // const [pin5, setPin5] = useState(null);
  // const [pin6, setPin6] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Code is</Text>
      <Text style={styles.number}>00000000000</Text>
      <View style={styles.inputView}>
        <View>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
          />
        </View>
      </View>
      <Pressable
        onPress={() => navigation.navigate("MyFirstName")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>CONTINUE</Text>
      </Pressable>
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
    fontSize: 13.59,
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
    flexDirection: "row",
    gap: 5.37,
    marginTop: 79.79,
  },
});
