import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { Title } from "../Title/Title"
import { registrFormStyles } from "./RegistrationForm.styles"

export const RegistrationForm = () => {

  const handleGetPhoto = ({ target }) => {
    console.log(target);
  }

  return (
    <View style={registrFormStyles.formWrapper}>
      <TouchableOpacity
        onPress={handleGetPhoto}
        style={registrFormStyles.photo}
      >

      </TouchableOpacity>
      <Title title="Реєстрація" />
      <View style={registrFormStyles.formBody}>
        <TextInput
          placeholder="Логін"
          style={registrFormStyles.input}
        />
        <TextInput
          placeholder="Адреса електронної пошти"
          style={registrFormStyles.input}
        />
        <TextInput
          placeholder="Пароль"
          style={registrFormStyles.input}
        />
      </View>
      <TouchableOpacity style={registrFormStyles.button}>
        <Text style={registrFormStyles.buttonText}>Зареєстуватися</Text>
      </TouchableOpacity>
      <Text
        style={registrFormStyles.navigateToLogin}
      >
        Вже є акаунт? Увійти
      </Text>
    </View>
  )
}
