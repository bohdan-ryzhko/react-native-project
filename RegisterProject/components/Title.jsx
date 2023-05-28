import { useFonts } from 'expo-font';
import { StyleSheet, Text } from "react-native";

export const Title = ({ title }) => {
	const [fontsLoaded] = useFonts({
		'Roboto-Medium': require('../assets/fonts/Roboto/Roboto-Medium.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<Text style={styles.title}>{title}</Text>
	);
};

const styles = StyleSheet.create({
	title: {
		fontFamily: 'Roboto-Medium',
		fontWeight: 500,
		fontSize: 30,
		lineHeight: 35,
		textAlign: "center",
		letterSpacing: 30 * 0.01,
		marginBottom: 33,
	}
});
