import { StyleSheet } from "react-native";

export const controllInputStyles = StyleSheet.create({
  input: {
    backgroundColor: "#e8e8e8",
    width: "100%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#c8c8c8",
    padding: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  errorText: {
    position: "absolute",
    color: "tomato",
    left: 10,
    bottom: -15,
    fontSize: 12,
  },
  togglePwd: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 16,
    justifyContent: "center",
  },
  togglePwdText: {
    color: "#1B4371",
    fontSize: 16,
  }
});
