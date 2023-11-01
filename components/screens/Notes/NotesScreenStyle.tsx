import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#252525",
    fontFamily: "Quicksand-Light",
    padding: 10,
    width: "100%",
    height: "100%",
    fontSize: 20,
    textAlignVertical: "top",
    color: "white",
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
    // height: "8%",
    backgroundColor: "#3b3b3b",
    // keep FAB in top right using the below properties
    right: 20,
    bottom: 20,
  },
  text: {
    // position: "relative",
    fontFamily: "Quicksand-Light",
    fontSize: 20,
    // letterSpacing: 0.25,
    color: "white",
  },
});
