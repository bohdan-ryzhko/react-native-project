import React from "react";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf")
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </>
  );
}

export default App;
