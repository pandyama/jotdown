import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#252525",
    // alignItems: "center",
    // justifyContent: "center",
    // borderStyle: "solid",
    // borderColor: "red",
    // borderWidth: 2,
    // margin: 5,
    // flexDirection: "row",
    // flexWrap: "wrap",
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
    // fontWeight: "bold",
    // letterSpacing: 0.25,
    color: "white",
  },
  // #ffcc80 #E6EE9B #CF93D9 #80DEEA #FFAB91
  card: {
    // backgroundColor: "dodgerblue",
    // backgroundColor: "#FFAB91",
    // backgroundColor: "#E6EE9B",
    height: 200,
    maxHeight: 300,
    flex: 1,
    padding: 10,
    // alignSelf: "center",
    // justifyContent: "center",
    // alignItems: "center",
    margin: 10,
    borderRadius: 5,
  },
});
