import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#252525",
  },
  twoColumns: {
    flex: 1,
    width: "100%",
    borderStyle: "solid",
    borderColor: "green",
    borderWidth: 2,
    flexDirection: "row",
  },
  leftColumn: {
    flex: 2,
  },
  rightColumn: {
    flex: 2,
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
    right: 15,
    bottom: 10,
  },
  text: {
    position: "relative",
    fontSize: 30,
    color: "white",
  },
  card: {
    height: 200,
    maxHeight: 300,
    flex: 1,
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    margin: 10,
    borderRadius: 5,
  },
});
