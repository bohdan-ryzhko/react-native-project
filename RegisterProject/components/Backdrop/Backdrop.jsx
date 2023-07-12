import { ImageBackground, View } from "react-native";
import { backdropStyles } from "./Backdrop.styles";

export const Backdrop = ({ component: Component }) => {
  return (
    <>
      <ImageBackground
        source={require("../../images/view-bg.jpg")}
        style={backdropStyles.imageBackground}
      />
      <View style={backdropStyles.backdrop}>
        {Component}
      </View>
    </>
  );
};
