import { StatusBar } from "expo-status-bar";
import { Pressable, Text } from "react-native";
import { styles } from "./ButtonStyle";

interface Time {
  time: string;
  date: string;
}

export default function Button() {
  const onPress = () => {
    console.log("Button pressed");
  };

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>+</Text>
    </Pressable>
  );
}
