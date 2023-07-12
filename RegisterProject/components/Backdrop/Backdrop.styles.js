import { StyleSheet } from "react-native";

export const backdropStyles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backdrop: {
    width: "100%",
    height: "67%",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  }
});
