import { Text } from "react-native";
import CustomView from "./CustomView";
import { Backdrop } from "./Backdrop";
import { RegisterForm } from "./RegisterForm";
import { Title } from "./Title";

export const RegistrationScreen = () => {
	return (
		<CustomView>
			<Backdrop>
				<Title title="Реєстрація" />
				<RegisterForm />
				<Text style={{
					color: "#1B4371",
					textAlign: "center",
				}} >Вже є акаунт? Увійти</Text>
			</Backdrop>
		</CustomView>
	)
}
