import {
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { useForm } from "react-hook-form"

import { registrFormStyles } from "./RegistrationForm.styles"
import { Title } from "../Title/Title"
import { ControllInput } from "../ControllInput/ControllInput";

const initialState = {
  defaultValues: {
    login: "",
    email: "",
    password: "",
  },
}

export const RegistrationForm = () => {

  const { control, handleSubmit, formState: { errors }, reset } = useForm(initialState);

  const onSubmit = data => {
    console.log(data)
    reset();
  };

  const handleGetPhoto = ({ target }) => {
    console.log("target");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={registrFormStyles.formWrapper}>
        <TouchableOpacity onPress={handleGetPhoto} style={registrFormStyles.photo}></TouchableOpacity>
        <Title title="Реєстрація" />
        <View style={registrFormStyles.formBody}>
          <ControllInput
            name="login"
            placeholder="Логін"
            error={errors.login}
            control={control}
          />
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
          style={registrFormStyles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={registrFormStyles.buttonText}>
            Зареєстуватися
          </Text>
        </TouchableOpacity>
        <Text
          style={registrFormStyles.navigateToLogin}
        >
          Вже є акаунт? Увійти
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}
