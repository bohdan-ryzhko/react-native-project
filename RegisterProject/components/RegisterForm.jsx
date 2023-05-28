import { View, TextInput, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { CustomButton } from "./CustomButton";

export const RegisterForm = () => {
	const { control, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			login: "",
			email: "",
			password: "",
		}
	});
	const onSubmit = data => console.log(data);

	return (
		<>
			<View style={styles.formBody}>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<View style={errors.login ? styles.inputWrapperError : styles.inputWrapper}>
							<TextInput
								style={styles.input}
								placeholder="Логін"
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
							/>
						</View>
					)}
					name="login"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<View style={errors.email ? styles.inputWrapperError : styles.inputWrapper}>
							<TextInput
								style={styles.input}
								placeholder="Адреса електронної пошти"
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
								keyboardType="email-address"
							/>
						</View>
					)}
					name="email"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<View style={errors.password ? styles.inputWrapperError : styles.inputWrapper}>
							<TextInput
								style={styles.input}
								placeholder="Пароль"
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
							/>
						</View>
					)}
					name="password"
				/>
			</View>
			<CustomButton title="Зареєстуватися" onPress={handleSubmit(onSubmit)} />
		</>
	);
}

const styles = StyleSheet.create({
	formBody: {
		display: "flex",
		flexDirection: "column",
		gap: 16,
		marginBottom: 43,
	},
	input: {
		height: 50,
		backgroundColor: "#F6F6F6",
		borderRadius: 8,
		padding: 16,
	},
	inputWrapper: {
		borderColor: "#e8e8e8",
		borderWidth: 1,
		borderRadius: 8
	},
	inputWrapperError: {
		borderColor: "#FF6C00",
		borderWidth: 1,
		borderRadius: 8
	},
});
