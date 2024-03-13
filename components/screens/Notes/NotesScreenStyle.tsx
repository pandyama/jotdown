import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#252525",
    color: "white",
    fontFamily: "DMSans-Regular",
    padding: 35,
    width: "100%",
    height: "100%",
    letterSpacing: 1.8,
    fontSize: 20,
    textAlignVertical: "top",
  },
  container: {
    backgroundColor: "#252525",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-around",
  },
  saveButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    borderRadius: 4,
    width: "20%",
    backgroundColor: "#3b3b3b",
    // keep FAB in top right using the below properties
    right: 20,
    bottom: 20,
  },
  deleteButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    borderRadius: 4,
    width: "20%",
    backgroundColor: "#9c0000",
    // keep FAB in top right using the below properties
    left: 20,
    bottom: 20,
  },
  text: {
    fontFamily: "DMSans-Regular",
    fontSize: 18,
    color: "white",
  },
});
