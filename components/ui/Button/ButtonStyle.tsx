import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
    width: 55,
    height: 55,
    elevation: 10,
    backgroundColor: "black",
    // keep FAB in bottom right using the below properties
    right: 20,
    bottom: 20,
  },
  text: {
    position: "relative",
    fontSize: 30,
    color: "white",
  },
});
