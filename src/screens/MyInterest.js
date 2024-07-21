import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import AppIcon from "../components/AppIcon/AppIcon";
import Color from "../../Style/Color";
import InterestsChoices from "../components/InterestsChoices";
import Buttons from "../components/Buttons";

const MyInterest = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={0.7}
        color="#EA4080"
        width={null}
        borderRadius={0}
        unfilledColor="#D9D9D9"
        height={4.7}
        style={styles.bar}
      />
      <ScrollView>
        <View style={styles.container2}>
          <Pressable onPress={() => navigation.goBack()}>
            <AppIcon
              name="back"
              color={Color.gray}
              height={18.14}
              width={9.07}
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("AddPhotos")}>
            <Text style={styles.skip}>SKIP</Text>
          </Pressable>
        </View>
        <View style={styles.container3}>
          <Text style={styles.text}>Interests </Text>
          <Text style={styles.info}>
            Let everyone know what you’re interested in by adding it to your
            profile.
          </Text>
          <InterestsChoices />
        </View>
      </ScrollView>
      <View style={styles.FooterView}>
        <Buttons
          label="CONTINUE 2/5"
          onPress={() => navigation.navigate("AddPhotos")}
        />
      </View>
    </View>
  );
};

export default MyInterest;

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    flex: 1,
    backgroundColor: Color.white,
    paddingBottom: 20,
  },
  container2: {
    paddingTop: 14.78,
    paddingHorizontal: 24.86,
  },
  container3: {
    marginLeft: 66,
  },
  text: {
    color: Color.black,
    fontSize: 38.29,
    fontFamily: "InterSemiBold",
    // paddingLeft: 50,
    textAlign: "left",
  },
  skip: {
    color: "#00000020",
    fontSize: 19.1,
    fontFamily: "InterRegular",
    textAlign: "right",
  },
  info: {
    color: Color.gray1,
    fontSize: 13.19,
    fontFamily: "InterMedium",
    lineHeight: 17.1,

    marginTop: 16,
  },
  FooterView: {
    paddingHorizontal: 40,
  },
});
