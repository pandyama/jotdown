import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { styles } from "./TextBoxStyle";

interface Time {
  time: string;
  date: string;
}

export default function TextBox() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>This is a test note</Text>
    </View>
  );
}
