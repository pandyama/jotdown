import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#252525",
    padding: 5,
  },
  button: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
    width: 60,
    height: 60,
    elevation: 10,
    backgroundColor: "black",
    // keep FAB in bottom right using the below properties
    right: 20,
    bottom: 20,
  },
  buttonTwo: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
    width: 60,
    height: 60,
    elevation: 10,
    backgroundColor: "black",
    // keep FAB in bottom right using the below properties
    left: 20,
    bottom: 20,
  },
  text: {
    position: "relative",
    fontSize: 24,
    color: "white",
  },
  card: {
    minHeight: 200,
    maxHeight: 300,
    flexBasis: "auto",
    overflow: "scroll",
    backgroundColor: "white",
    padding: 12,
    display: "flex",
    margin: 8,
    borderRadius: 12,
  },
});
