import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    // alignItems: "center",
    // justifyContent: "center",
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 2,
    // margin: 5,
    flexDirection: "row",
    flexWrap: "wrap",
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
    // display: "flex",
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
    // fontWeight: "bold",
    // letterSpacing: 0.25,
    color: "white",
  },
  // #ffcc80 #E6EE9B #CF93D9 #80DEEA
  card: {
    // backgroundColor: "dodgerblue",
    // backgroundColor: "#FFAB91",
    backgroundColor: "#E6EE9B",
    height: 200,
    maxHeight: 300,
    flex: 1,
    padding: 15,
    // alignSelf: "center",
    // justifyContent: "center",
    // alignItems: "center",
    margin: 10,
    // borderStyle: "solid",
    // borderWidth: 1,
    borderRadius: 7,
  },
});
