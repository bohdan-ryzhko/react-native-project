import { KeyboardAvoidingView, Platform, View } from "react-native"
import { Backdrop } from "../../components/Backdrop/Backdrop"
import { LoginForm } from "../../components/LoginForm/LoginForm"

export const LoginScreen = () => (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={100}
    style={{ flex: 1 }}
  >
    <View style={{ flex: 1 }}>
      <Backdrop component={<LoginForm />} />
    </View>
  </KeyboardAvoidingView>
)
