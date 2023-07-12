import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { Title } from "../Title/Title";
import { loginFormStyles } from "./LoginForm.styles";

export const LoginForm = () => {

  return (
    <View style={loginFormStyles.formWrapper}>
      <Title title="Увійти" />
      <View style={loginFormStyles.formBody}>
        <TextInput
          placeholder="Адреса електронної пошти"
          style={loginFormStyles.input}
        />
        <TextInput
          placeholder="Пароль"
          style={loginFormStyles.input}
        />
      </View>
      <TouchableOpacity style={loginFormStyles.button}>
        <Text style={loginFormStyles.buttonText}>Увійти</Text>
      </TouchableOpacity>
      <Text
        style={loginFormStyles.navigateToRegister}
      >
        Немає акаунту? Зареєструватися
      </Text>
    </View>
  )
}
