import { Platform, StyleSheet, View } from "react-native";

export const Backdrop = ({ children }) => (
	<View style={
		Platform.OS === "ios"
			? { ...styles.backdrop, height: "60%" }
			: { ...styles.backdrop, height: "70%" }
	}>
		{children}
	</View>
);

const styles = StyleSheet.create({
	backdrop: {
		width: "100%",
		backgroundColor: "#fff",
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
		position: "absolute",
		bottom: 0,
		left: 0,
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 92,
		paddingBottom: 30,
	}
});
