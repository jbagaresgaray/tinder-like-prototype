import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Tabs/Home";
import Explore from "../screens/Tabs/Explore";
import Search from "../screens/Tabs/Search";
import Messages from "../screens/Tabs/Messages";
import Profile from "../screens/Tabs/Profile";
import AppIcon from "../components/AppIcon/AppIcon";
import Color from "../../Style/Color";

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: "",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 62,
        },
        headerBackground: () => (
          <View style={styles.container}>
            <AppIcon name="tabtitle" width={92.71} height={22} />
          </View>
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <AppIcon name="coloredfire" width={22.57} height={26.87} />
            ) : (
              <AppIcon name="fire" width={22.57} height={26.87} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <AppIcon name="star" size={27.21} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <AppIcon name="search" width={28.07} height={23.85} />;
          },
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <AppIcon name="chat" width={30.9} height={26.84} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <AppIcon name="coloredprofile" width={19.46} height={26.03} />
            ) : (
              <AppIcon
                name="profile"
                width={19.46}
                height={26.03}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 35,
    paddingTop: 50,
    backgroundColor: Color.white,
    flex: 1,
  },
});
