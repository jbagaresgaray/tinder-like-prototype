import {
  Platform,
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
import MaskInput, { Masks } from "react-native-mask-input";
import Buttons from "../components/Buttons";
import { SafeAreaView } from "react-native-safe-area-context";

const MyBDay = ({ navigation }) => {
  const [myBDay, setMyBDay] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Progress.Bar
        progress={0.2}
        color="#EA4080"
        width={null}
        borderRadius={0}
        unfilledColor="#D9D9D9"
        height={4.7}
        // style={styles.bar}
      />
      <View style={styles.container2}>
        <Pressable onPress={() => navigation.goBack()}>
          <AppIcon name="close" color={Color.gray} size={18.47} />
        </Pressable>
        <Text style={styles.text}>My{"\n"}birthday is</Text>
        <View style={styles.inputView}>
          <MaskInput
            style={styles.input}
            placeholder="YYYY/MM/DD"
            value={myBDay}
            mask={Masks.DATE_YYYYMMDD}
            onChangeText={(masked, unmasked) => {
              setMyBDay(masked); // you can use the unmasked value as well

              // assuming you typed "9" all the way:
              console.log(masked); // (99) 99999-9999
              console.log(unmasked); // 99999999999
            }}
          />
        </View>
        <Text style={styles.info}>Your age will be public.</Text>
        <View
          style={{
            marginTop: 100,
          }}
        >
          <Buttons
            label="CONTINUE"
            onPress={() => navigation.navigate("MyGender")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyBDay;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 45 : 0,
    flex: 1,
    backgroundColor: Color.white,
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
  info: {
    color: Color.gray,
    fontSize: 13.19,
    fontFamily: "InterMedium",
    lineHeight: 17.1,
    paddingLeft: 50,
    marginTop: 12.12,
  },
  input: {
    borderColor: Color.gray,
    color: Color.black,
    fontSize: 22,
    fontFamily: "InterRegular",
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingLeft: 50,
    marginTop: 75,
  },
});
