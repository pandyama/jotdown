import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";

import HomeScreen from "./components/screens/Home/HomeScreen";
import NotesScreen from "./components/screens/Notes/NotesScreen";

const stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Quicksand-Regular": require("./assets/fonts/Quicksand/Quicksand-Regular.ttf"),
    "Quicksand-Light": require("./assets/fonts/Quicksand/Quicksand-Light.ttf"),
    "RadioCanada-Regular": require("./assets/fonts/RadioCanada/RadioCanada-Regular.ttf"),
    "DaiBannaSIL-Regular": require("./assets/fonts/DaiBannaSIL/DaiBannaSIL-Regular.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <>
      {fontsLoaded && (
        <NavigationContainer>
          <stack.Navigator initialRouteName="Home">
            <stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Jot Down",
                headerTitleStyle: {
                  fontFamily: "DMSans-Regular",
                  fontSize: 30,
                },
              }}
            />
            <stack.Screen
              name="Notes"
              component={NotesScreen}
              options={{
                title: "Write Note",
                headerTitleStyle: {
                  fontFamily: "DMSans-Regular",
                  fontSize: 30,
                },
              }}
            />
          </stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderStyle: "solid",
    borderWidth: 2,
    margin: 5,
  },
  twoColumns: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 1,
  },
  textStyle: { fontFamily: "Quicksand-Light" },
});
