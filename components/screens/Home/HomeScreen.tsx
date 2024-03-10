import React, { useEffect, useState } from "react";

import { useIsFocused } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  View,
  Platform,
  DimensionValue,
  FlexStyle,
} from "react-native";

import { styles } from "./HomeScreenStyle";

const Card = ({ noteId, name, color, savedOn, navigation }: any) => {
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
          await navigation.navigate("Home");
        },
      },
    ]);
  };

  return (
    <View style={{ ...styles.card, backgroundColor: color }}>
      <Text
        style={{
          fontFamily: "DMSans-Regular",
          fontSize: 11,
        }}
      >
        {savedOn}
        {"\n"}
      </Text>

      <Text
        style={{
          fontFamily: "DMSans-Regular",
          fontSize: 17,
        }}
      >
        {name}
      </Text>
      <View
        style={{
          position: "absolute",
          right: 10,
          bottom: 0,
          margin: 5,
        }}
      >
        <Pressable onPress={() => deleteNote(noteId)}>
          <Entypo name="trash" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default function HomeScreen({ navigation }: any) {
  const [flexDirection, setFlexDirection] = useState<any>("row");
  const [width, setWidth] = useState<DimensionValue>("50%");

  const isFocused = useIsFocused();
  const [notes, setNotes] = useState<any[]>([]);

  useEffect(() => {
    if (isFocused) {
      getNotes();
    }
  }, [isFocused, flexDirection, width]);

  useEffect(() => {
    getNotes();
  }, [notes]);

  const getNotes = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const notes = await AsyncStorage.multiGet(keys);

      let parsedNotes =
        Platform.OS === "ios"
          ? notes.map((note) => JSON.parse(note[1] || ""))
          : notes.map((note) => JSON.parse(note[1] || "")).reverse();

      setNotes(parsedNotes);

      return parsedNotes;
    } catch (e) {
      console.log("error retrieving  all notes", e);
    }
  };

  return (
    // <SafeAreaView
    //   style={{
    //     flex: 1,
    //     backgroundColor: "#252525",
    //     paddingTop: Platform.OS === "android" ? 0 : 0,
    //   }}
    // >
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexDirection: flexDirection,
          flexWrap: "wrap",
          backgroundColor: "#252525",
        }}
      >
        {notes
          .filter((note) => note.noteContent && note.noteColor && note.savedOn)
          .map((item, idx) => {
            return (
              <View
                key={idx}
                style={{
                  width: width, // TODO: 100%
                }}
              >
                <Pressable
                  onPress={() =>
                    navigation.navigate("Notes", {
                      noteId: item.noteId.toString(),
                      noteContent: item.noteContent.toString(),
                    })
                  }
                >
                  <Card
                    name={item.noteContent}
                    color={item.noteColor}
                    savedOn={item.savedOn}
                    noteId={item.noteId.toString()}
                    navigation={navigation}
                  />
                </Pressable>
              </View>
            );
          })}
      </ScrollView>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Notes")}
      >
        <Text style={styles.text}>+</Text>
      </Pressable>
      <Pressable
        style={styles.buttonTwo}
        onPress={() => {
          if (flexDirection === "column") {
            setFlexDirection("row");
            setWidth("50%" as DimensionValue);
          } else if (flexDirection === "row") {
            setFlexDirection("column");
            setWidth("100%" as DimensionValue);
          }
        }}
      >
        <Text style={styles.text}>↻</Text>
      </Pressable>
    </View>
    // </SafeAreaView>
  );
}
