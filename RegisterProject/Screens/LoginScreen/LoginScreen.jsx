import { Backdrop } from "../../components/Backdrop/Backdrop"
import { LoginForm } from "../../components/LoginForm/LoginForm"

export const LoginScreen = () => (
  <Backdrop component={<LoginForm />} />
)
