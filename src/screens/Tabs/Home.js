import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../../../Style/Color";
import Swiper from "react-native-deck-swiper";
import data from "../../cards/photoCards";
import CardStyle from "../../cards/CardStyle";
import Card from "../../cards/Card";
import AppIcon from "../../components/AppIcon/AppIcon";

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const onSwiped = () => {
    setIndex(index + 1);
  };
  return (
    <View style={styles.container}>
      <Swiper
        cardVerticalMargin={30}
        cardHorizontalMargin={5}
        cards={data}
        cardIndex={index}
        renderCard={(card) => <Card card={card} />}
        onSwiper={onSwiped}
        stackScale={10}
        stackSize={4}
        stackSeparation={14}
        animateOverlayLabelsOpacity
        infinite
        backgroundColor="white"
        overlayLabels={{
          left: {
            title: "NOPE",
            style: {
              label: {
                borderWidth: 5,
                borderColor: "#EB545D",
                color: "#EB545D",
                textAlign: "center",
                fontSize: 46.35,
                fontFamily: "InterBold",
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                marginTop: 10,
              },
            },
          },
          right: {
            title: "Like",
            style: {
              label: {
                borderWidth: 5,
                borderColor: "#6EE7BC",
                color: "#6EE7BC",
                textAlign: "center",
                fontSize: 46.35,
                fontFamily: "InterBold",
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: 10,
              },
            },
          },
        }}
      />
      <View style={styles.icons}>
        <Pressable>
          <AppIcon name="retry" size={48.37} />
        </Pressable>
        <Pressable style={styles.x}>
          <AppIcon name="gradientx" size={23.87} />
        </Pressable>
        <Pressable style={styles.star}>
          <AppIcon name="blue-star" size={24.86} />
        </Pressable>
        <Pressable style={styles.heart}>
          <AppIcon name="heart" width={28.22} height={23.51} />
        </Pressable>
        <Pressable style={styles.lightning}>
          <AppIcon name="lightning" width={12.76} height={23.64} />
        </Pressable>
      </View>
      {/* <Text style={styles.ops}>Oops!</Text>
      <Text style={styles.info}>We can no longer find people near you, please try again later</Text>
      <Pressable style={styles.retryView}>
        <AppIcon name="retry" size={26.51} />
        <Text style={styles.retry}>Try again</Text>
      </Pressable> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 5.04,
    backgroundColor: Color.white,
    // justifyContent: "center",
    // alignItems: "center",
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
  image: {
    width: "100%",
    height: "95%",
    borderRadius: 10.75,
  },
  lightning: {
    borderWidth: 1,
    borderColor: "#AA54EA",
    width: 48.37,
    height: 48.37,
    borderRadius: 48.37,
    alignItems: "center",
    justifyContent: "center",
  },
  heart: {
    borderWidth: 1,
    borderColor: "#6DE5B5",
    width: 60.46,
    height: 60.46,
    borderRadius: 60.46,
    alignItems: "center",
    justifyContent: "center",
  },
  star: {
    borderWidth: 1,
    borderColor: "#62BAF3",
    width: 48.37,
    height: 48.37,
    borderRadius: 48.37,
    alignItems: "center",
    justifyContent: "center",
  },
  x: {
    borderWidth: 1,
    borderColor: "#D94A38",
    width: 60.46,
    height: 60.46,
    borderRadius: 60.46,
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 21.5,
    position: "absolute",
    bottom: 10,
    paddingHorizontal: 30,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 20,
  },
});
