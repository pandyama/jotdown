import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { styles } from "./HomeScreenStyle";
import TextBox from "../../ui/TextBox/TextBox";
import Button from "../../ui/Button/Button";
import { Pressable } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* <Heading></Heading> */}
      <View style={styles.twoColumns}>
        <View style={styles.leftColumn}>
          <TextBox></TextBox>
          <TextBox></TextBox>
          <TextBox></TextBox>
          <TextBox></TextBox>
        </View>
        <View style={styles.rightColumn}>
          <TextBox></TextBox>
          <TextBox></TextBox>
          <TextBox></TextBox>
        </View>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Notes")}
      >
        <Text style={styles.text}>+</Text>
      </Pressable>
    </View>
  );
}
