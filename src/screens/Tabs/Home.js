import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../../Style/Color";
import AppIcon from "../../components/AppIcon/AppIcon";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.ops}>Oops!</Text>
      <Text style={styles.info}>We can no longer find people near you, please try again later</Text>
      <Pressable style={styles.retryView}>
        <AppIcon name="retry" size={26.51} />
        <Text style={styles.retry}>Try again</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 33.93
  },
  ops: {
    color: Color.black1,
    fontSize: 29.56,
    fontFamily: "InterBold",
  },
  info: {
    color: Color.gray,
    fontSize: 19.48,
    textAlign: "center",
    lineHeight: 25.2,
    fontFamily: "InterMedium",
    marginTop: 40,
  },

  retryView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6.49,
    marginTop: 32,
  },
  retry: {
    color: Color.yellow,
    fontSize: 19,
    fontFamily: "InterMedium",
    lineHeight: 25.2,
  },
});
