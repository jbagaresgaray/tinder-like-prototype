import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/Onboarding";
import TabStack from "./TabStack";
import CreateAccount from "../screens/CreateAccount";
import MyNumber from "../screens/MyNumber";
import MyCode from "../screens/MyCode";
import MyFirstName from "../screens/MyFirstName";
import MyBirthday from "../screens/MyBirthday";
import MyGender from "../screens/MyGender";
import MyInterests from "../screens/MyInterests";
import AddPhotos from "../screens/AddPhotos";
import WelcomeScreen from "../screens/WelcomeScreen";
import Tutorial from "../screens/Tutorial";

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
      <Stack.Screen name="MyCode" component={MyCode} />
      <Stack.Screen name="MyFirstName" component={MyFirstName} />
      <Stack.Screen name="MyBirthDay" component={MyBirthday} />
      <Stack.Screen name="MyGender" component={MyGender} />
      <Stack.Screen name="MyInterests" component={MyInterests} />
      <Stack.Screen name="AddPhotos" component={AddPhotos} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="Tutorial" component={Tutorial} />
      <Stack.Screen name="Dashboard" component={TabStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
