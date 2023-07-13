import { StyleSheet } from "react-native";

export const registrFormStyles = StyleSheet.create({
  photo: {
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    width: 120,
    height: 120,
    position: "absolute",
    left: "50%",
    top: -60,
    transform: [{ translateX: -0.5 * 120 }],
  },
  add: {
    position: "absolute",
    right: -10,
    bottom: 10,
  },
  formWrapper: {
    paddingTop: 92,
  },
  formBody: {
    marginTop: 33,
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginBottom: 43,
  },
  button: {
    width: "100%",
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    color: "#000",
    borderRadius: 100,
    marginBottom: 16,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#fff",
  },
  navigateToLogin: {
    textAlign: "center",
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  }
});
