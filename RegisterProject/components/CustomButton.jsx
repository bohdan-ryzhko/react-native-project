import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export const CustomButton = ({ title, onPress }) => (
	<TouchableOpacity
		style={styles.button}
		onPress={onPress}
	>
		<Text style={styles.buttonText}>{title}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	button: {
		width: "100%",
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
		backgroundColor: "#FF6C00",
		paddingTop: 16,
		paddingBottom: 16,
		borderRadius: 100,
		marginBottom: 16,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: 400,
	},
});
