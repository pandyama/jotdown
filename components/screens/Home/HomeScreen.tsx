import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { styles } from "./HomeScreenStyle";
import TextBox from "../../ui/TextBox/TextBox";
import Button from "../../ui/Button/Button";
import { Pressable } from "react-native";

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

// const loadNotes = async () => {
//   // load all saved notes from AsyncStorage
//   try {
//     const keys = await AsyncStorage.getAllKeys();
//     const savedNotes = await AsyncStorage.multiGet(keys);
//     const notes = savedNotes.map((note) => JSON.parse(note[1]));
//     // setNotes(notes);
//   } catch (error) {
//     console.log(error);
//   }
// };

export default function HomeScreen({ navigation }: any) {
  const isFocused = useIsFocused();

  const [allKeys, setKeys] = useState([]);

  const [notes, setNotes] = useState<any[]>([]);

  useEffect(() => {
    // AsyncStorage.getAllKeys()
    //   .then((res) => {
    //     // res is an array like ["1234", "5678"]
    //     setKeys;
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    if (isFocused) {
      getNotes();
    }
  }, [isFocused]);

  const getNotes = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      console.log("🚀 ~ file: HomeScreen.tsx:63 ~ getNotes ~ keys:", keys);
      console.log("----------------");
      const notes = await AsyncStorage.multiGet(keys);
      console.log("🚀 ~ file: HomeScreen.tsx:60 ~ getNotes ~ notes:", notes);
      console.log("----------------");
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
        {/* {Array.from(Array(10).keys()).map((item, idx) => {
      return (
        <View key={idx} style={{ width: "50%", flexDirection: "row" }}>
          <Card name="Meet" />
        </View>
      );
    })} */}

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
