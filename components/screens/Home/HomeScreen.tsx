import React, { useEffect, useState } from "react";

import { useIsFocused } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Pressable, ScrollView, Text, View, Platform } from "react-native";

import { styles } from "./HomeScreenStyle";

const Card = ({ id, name, color, savedOn }: any) => {
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
    </View>
  );
};

export default function HomeScreen({ navigation }: any) {
  const isFocused = useIsFocused();
  const [notes, setNotes] = useState<any[]>([]);

  useEffect(() => {
    if (isFocused) {
      getNotes();
    }
  }, [isFocused]);

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
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
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
                  width: "50%",
                  // flexDirection: "row",
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
    </View>
  );
}
