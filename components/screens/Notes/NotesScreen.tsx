import React, { useCallback, useEffect, useState } from "react";

import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "expo-font";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

import { styles } from "./NotesScreenStyle";
import TextBox from "../../ui/TextBox/TextBox";
import Button from "../../ui/Button/Button";

export default function NotesScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="default"
        placeholder="Enter something"
        placeholderTextColor="#ffffff"
        multiline={true}
        style={styles.textInput}
      />
      <Pressable style={styles.button}>
        <Text style={styles.text}>Save</Text>
      </Pressable>
    </View>
  );
}
