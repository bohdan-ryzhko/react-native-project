import { ImageBackground, StyleSheet, View } from "react-native";
import viewBg from "../assets/images/view-bg.jpg";

const CustomView = ({ children }) => {
	return (
		<View
			style={styles.view}
		>
			<ImageBackground style={styles.imageBackground} source={viewBg} />
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		flexGrow: 1,
		position: "relative"
	},
	imageBackground: {
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		height: "100%",
	},
});

export default CustomView;