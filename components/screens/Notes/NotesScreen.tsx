import React, { useState } from "react";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Alert, Text, View, TextInput, Pressable } from "react-native";

import { styles } from "./NotesScreenStyle";

const colors = ["#ffcc80", "#E6EE9B", "#CF93D9", "#80DEEA", "#FFAB91"];

export default function NotesScreen({ route, navigation }: any) {
  let noteId: string = "-1";
  let editNoteContent;

  if (route && route.params) {
    noteId = route.params.noteId;
    editNoteContent = route.params.noteContent;
  }

  const [note, setNote] = useState("");

  const saveNote = async (text: string) => {
    const colorIndex = await AsyncStorage.getItem("colorIndex");
    const noteId = await AsyncStorage.getItem("noteId");
    let newNoteId;

    if (!colorIndex || colorIndex === "4") {
      await AsyncStorage.setItem("colorIndex", "0");
    } else {
      const numColorIndex = Number(colorIndex) + 1;
      await AsyncStorage.setItem("colorIndex", numColorIndex.toString());
    }

    if (!noteId) {
      await AsyncStorage.setItem("noteId", "0");
      newNoteId = "0";
    } else {
      newNoteId = Number(noteId) + 1;
      await AsyncStorage.setItem("noteId", newNoteId.toString());
    }

    const today = new Date();
    const savedOn = moment(today).format("MMM DD YYYY");
    const savedAt = moment(today).format("hh:mm A");
    const randomId = Math.floor(Math.random() * 9000) + 1000;

    try {
      const keyExists = await AsyncStorage.getItem(newNoteId.toString());
      if (!keyExists) {
        const colorIdx = await AsyncStorage.getItem("colorIndex");
        const noteObject = JSON.stringify({
          noteId: newNoteId,
          savedAt,
          savedOn,
          noteContent: text,
          noteColor: colors[Number(colorIdx) || 0],
        });

        await AsyncStorage.setItem(newNoteId.toString(), noteObject);
        navigation.navigate("Home");
      }
    } catch (e) {
      console.log("Error saving note", e);
    }
  };

  const editNote = async (text: string) => {
    if (text !== "") {
      const existingObject = await AsyncStorage.getItem(noteId);

      if (existingObject) {
        const newObject = {
          ...JSON.parse(existingObject),
          noteContent: text,
        };
        await AsyncStorage.mergeItem(noteId, JSON.stringify(newObject));
        navigation.navigate("Home");
      }
    }
    navigation.navigate("Home");
  };

  const deleteNote = async (id: string) => {
    Alert.alert("Delete Note", "", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: async () => {
          await AsyncStorage.removeItem(id);
          navigation.navigate("Home");
        },
      },
    ]);
  };

  return (
    // <SafeAreaView
    //   style={{
    //     flex: 1,
    //     backgroundColor: "white",
    //     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //   }}
    // >
    <View style={styles.container}>
      {noteId !== "-1" ? (
        <>
          <TextInput
            keyboardType="default"
            placeholderTextColor="#939393"
            placeholder={editNoteContent}
            multiline={true}
            style={styles.textInput}
            defaultValue={editNoteContent}
            onChangeText={(text) => setNote(text)}
          />
          <Pressable style={styles.saveButton} onPress={() => editNote(note)}>
            <Text style={styles.text}>Save</Text>
          </Pressable>
          <Pressable
            style={styles.deleteButton}
            onPress={() => deleteNote(noteId)}
          >
            <Text style={styles.text}>Delete</Text>
          </Pressable>
        </>
      ) : (
        <>
          <TextInput
            keyboardType="default"
            placeholderTextColor="#939393"
            placeholder={"Write something..."}
            multiline={true}
            style={styles.textInput}
            value={note}
            onChangeText={(text) => setNote(text)}
          />
          <Pressable style={styles.saveButton} onPress={() => saveNote(note)}>
            <Text style={styles.text}>Save</Text>
          </Pressable>
        </>
      )}
    </View>
    // </SafeAreaView>
  );
}
