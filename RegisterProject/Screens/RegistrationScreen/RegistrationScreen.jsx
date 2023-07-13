import { KeyboardAvoidingView, Platform, View } from "react-native"
import { Backdrop } from "../../components/Backdrop/Backdrop"
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm"

export const RegistrationScreen = () => (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={100}
    style={{ flex: 1 }}
  >
    <View style={{ flex: 1 }}>
      <Backdrop component={<RegistrationForm />} />
    </View>
  </KeyboardAvoidingView>
)
