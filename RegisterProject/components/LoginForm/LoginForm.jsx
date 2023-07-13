import {
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native"

import { Title } from "../Title/Title";
import { loginFormStyles } from "./LoginForm.styles";
import { ControllInput } from "../ControllInput/ControllInput";
import { useForm } from "react-hook-form";

const initialState = {
  email: "",
  password: "",
}

export const LoginForm = () => {

  const { control, handleSubmit, formState: { errors }, reset } = useForm(initialState);

  const onSubmit = data => {
    console.log(data);
    reset();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={loginFormStyles.formWrapper}>
        <Title title="Увійти" />
        <View style={loginFormStyles.formBody}>
          <ControllInput
            keyboardType="email-address"
            name="email"
            placeholder="Адреса електронної пошти"
            error={errors.email}
            control={control}
          />
          <ControllInput
            name="password"
            placeholder="Пароль"
            error={errors.password}
            control={control}
          />
        </View>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={loginFormStyles.button}
        >
          <Text style={loginFormStyles.buttonText}>Увійти</Text>
        </TouchableOpacity>
        <Text
          style={loginFormStyles.navigateToRegister}
        >
          Немає акаунту? Зареєструватися
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}
