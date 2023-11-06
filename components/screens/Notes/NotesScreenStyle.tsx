import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#252525",
    color: "white",
    fontFamily: "DaiBannaSIL-Regular",
    padding: 35,
    width: "100%",
    height: "100%",
    letterSpacing: 1.8,
    fontSize: 24,
    textAlignVertical: "top",
  },
  container: {
    backgroundColor: "#252525",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    borderRadius: 10,
    width: "20%",
    backgroundColor: "#3b3b3b",
    // keep FAB in top right using the below properties
    right: 20,
    bottom: 20,
  },
  text: {
    fontFamily: "DaiBannaSIL-Regular",
    fontSize: 20,
    color: "white",
  },
});
