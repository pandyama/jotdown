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
    right: 20,
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
    // flex: 1,
    // padding: 8,
    paddingLeft: 5,
    paddingTop: 8,
    paddingBottom: 8,
    display: "flex",
    // justifyContent: "space-between",
    margin: 8,
    borderRadius: 5,
  },
});
