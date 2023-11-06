import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text, View, TextInput, Pressable } from "react-native";

import { styles } from "./NotesScreenStyle";

const colors = ["#ffcc80", "#E6EE9B", "#CF93D9", "#80DEEA", "#FFAB91"];

export default function NotesScreen({ navigation }: any) {
  const [note, setNote] = useState("");

  const saveNote = async (text: string) => {
    const today = new Date();
    const savedOn = moment(today).format("MMM DD YYYY");
    const savedAt = moment(today).format("hh:mm A");
    const randomId = Math.floor(Math.random() * 9000) + 1000;

    try {
      const keyExists = await AsyncStorage.getItem(randomId.toString());
      if (!keyExists) {
        const randomColor = Math.floor(Math.random() * colors.length);
        const noteObject = JSON.stringify({
          savedOn,
          noteContent: text,
          noteColor: colors[randomColor],
        });

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
