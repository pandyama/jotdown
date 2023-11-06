import React, { useEffect, useState } from "react";

import { useIsFocused } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Pressable, ScrollView, Text, View } from "react-native";

import { styles } from "./HomeScreenStyle";

const Card = ({ id, name, color, savedOn }: any) => {
  return (
    <View style={{ ...styles.card, backgroundColor: color }}>
      <Text
        style={{
          fontFamily: "DaiBannaSIL-Regular",
          fontSize: 20,
        }}
      >
        {name}
      </Text>

      <Text
        style={{
          fontFamily: "DaiBannaSIL-Regular",
          fontSize: 14,
        }}
      >
        {savedOn}
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
      let parsedNotes = notes.map((note) => JSON.parse(note[1] || ""));

      console.log("returning getNotes", parsedNotes);

      setNotes(parsedNotes);

      return parsedNotes;
    } catch (e) {
      console.log("error retrieving  all notes", e);
      // setIsLoading(false);
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
        {notes.map((item, idx) => {
          return (
            <View
              key={idx}
              style={{
                width: "50%",
                flexDirection: "row",
              }}
            >
              <Card
                name={item.noteContent}
                color={item.noteColor}
                savedOn={item.savedOn}
              />
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
