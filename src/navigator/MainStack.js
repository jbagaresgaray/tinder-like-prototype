import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/Onboarding";
import TabStack from "./TabStack";
import CreateAccount from "../screens/CreateAccount";
import MyNumber from "../screens/MyNumber";
import MyCode from "../screens/MyCode";
import MyFirstName from "../screens/MyFirstName";
import MyGender from "../screens/MyGender";
import AddPhotos from "../screens/AddPhotos";
import WelcomeScreen from "../screens/WelcomeScreen";
import Tutorial from "../screens/Tutorial";
import MyBDay from "../screens/MyBirthday";
import MyInterest from "../screens/MyInterest";
import AppIcon from "../components/AppIcon/AppIcon";
import { View, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          title: "",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="MyNumber"
        component={MyNumber}
        options={{
          title: "",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="MyCode"
        component={MyCode}
        options={{
          title: "",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="MyFirstName"
        component={MyFirstName}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyBDay"
        component={MyBDay}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyGender"
        component={MyGender}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyInterest"
        component={MyInterest}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddPhotos"
        component={AddPhotos}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          title: "",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Tutorial"
        component={Tutorial}
        options={{
          title: "",
          headerBackVisible: false,
          headerShadowVisible: false,
          headerBackground: () => (
            <View style={styles.container}>
              <AppIcon name="tabtitle" width={92.71} height={22} />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="TabStack"
        component={TabStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 35,
    paddingTop: 50,
  },
});
