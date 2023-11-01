import { StatusBar } from "expo-status-bar";
import { Pressable, Text } from "react-native";
import { styles } from "./HeadingStyle";

interface Time {
  time: string;
  date: string;
}

export default function Heading() {
  return <Text style={styles.text}>Jot Down</Text>;
}
