import { Text } from "react-native";
import { titleStyles } from "./Title.styles";

export const Title = ({ title }) => (
  <Text style={titleStyles.title}>{title}</Text>
);
