import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "expo-font";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

import { styles } from "./NotesScreenStyle";
import TextBox from "../../ui/TextBox/TextBox";
import Button from "../../ui/Button/Button";

const colors = ["#ffcc80", "#E6EE9B", "#CF93D9", "#80DEEA", "#FFAB91"];

export default function NotesScreen({ navigation }: any) {
  const [note, setNote] = useState("");

  const saveNote = async (text: string) => {
    const today = new Date();
    const savedOn = moment(today).format("MMM DD YYYY");
    const savedAt = moment(today).format("hh:mm A");

    const randomId = Math.floor(Math.random() * 9000) + 1000;

    console.log(
      "🚀 ~ file: NotesScreen.tsx:23 ~ saveNote ~ randomId:",
      randomId
    );

    console.log("🚀 ~ file: NotesScreen.tsx:20 ~ saveNote ~ today:", today);
    console.log("🚀 ~ file: NotesScreen.tsx:16 ~ NotesScreen ~ text:", text);

    try {
      const keyExists = await AsyncStorage.getItem(randomId.toString());
      if (!keyExists) {
        const randomColor = Math.floor(Math.random() * colors.length);
        const noteObject = JSON.stringify({
          savedOn,
          noteContent: text,
          noteColor: colors[randomColor],
        });

        console.log("🚀 ~ noteObject:", noteObject);

        await AsyncStorage.setItem(randomId.toString(), noteObject);
        navigation.navigate("Home");
      }
    } catch (e) {
      console.log("Error saving note", e);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="default"
        placeholderTextColor="#939393"
        placeholder={"Write something..."}
        multiline={true}
        style={styles.textInput}
        value={note}
        onChangeText={(text) => setNote(text)}
      />
      <Pressable style={styles.button} onPress={() => saveNote(note)}>
        <Text style={styles.text}>Save</Text>
      </Pressable>
    </View>
  );
}
