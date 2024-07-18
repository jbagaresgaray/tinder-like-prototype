import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Color from "../../Style/Color";

const DATA = [
  {
    label: "90s Kid",
    selected: false,
  },
  {
    label: "Harry Potter",
    selected: false,
  },
  {
    label: "SoundCloud",
    selected: false,
  },
  {
    label: "Spa",
    selected: false,
  },
  {
    label: "Self Care",
    selected: false,
  },
  {
    label: "Heavy Metal",
    selected: false,
  },
  {
    label: "House Parties",
    selected: false,
  },

  {
    label: "Gin Tonic",
    selected: false,
  },
  {
    label: "Gymnastics",
    selected: false,
  },
  {
    label: "Hapkido",
    selected: false,
  },
  {
    label: "Hot Yoga",
    selected: false,
  },

  {
    label: "Meditation",
    selected: false,
  },
  {
    label: "Spotify",
    selected: false,
  },
  {
    label: "Sushi",
    selected: false,
  },
  {
    label: "Hockey",
    selected: false,
  },
  {
    label: "Baketball",
    selected: false,
  },
  {
    label: "Slam Poetry",
    selected: false,
  },
  {
    label: "Home Workout",
    selected: false,
  },
  {
    label: "Theater",
    selected: false,
  },
  {
    label: "Cafe Hopping",
    selected: false,
  },
  {
    label: "Aquarium",
    selected: false,
  },
  {
    label: "Sneakers",
    selected: false,
  },
  {
    label: "Instagram",
    selected: false,
  },
  {
    label: "Hot Springs",
    selected: false,
  },
  {
    label: "Walking",
    selected: false,
  },
  {
    label: "Running",
    selected: false,
  },
  {
    label: "Travel",
    selected: false,
  },
];

const InterestsChoices = () => {
  const [interest, setInterest] = useState([]);

  useEffect(() => {
    setInterest(DATA);
  }, [DATA]);

  const onPressInterest = (label) => {
    let newData = [...interest];

    newData = newData.map((item) => {
      if (label === item.label) {
        return {
          ...item,
          selected: !item.selected,
        };
      }
      return {
        ...item,
      };
    });

    setInterest(newData);
  };

  return (
    <View style={styles.container}>
      {interest.map((item, index) => (
        <Pressable
          style={[
            styles.buttons,
            { borderColor: item.selected ? "#EA5B6E" : Color.gray },
          ]}
          key={index}
          onPress={() => onPressInterest(item.label)}
        >
          <Text
            style={[
              styles.text,
              { color: item.selected ? "#EA5B6E" : Color.gray },
            ]}
          >
            {item.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default InterestsChoices;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 27,
    gap: 10,
    marginRight: 50,
    flexWrap: "wrap",
   
  },
  buttons: {
    borderWidth: 2,
    borderColor: Color.gray,
    paddingVertical: 8,
    borderRadius: 67.18,
    paddingHorizontal: 12,
  },
  text: {
    textAlign: "center",
    color: Color.gray,
    fontFamily: "InterBold",
  },
});
