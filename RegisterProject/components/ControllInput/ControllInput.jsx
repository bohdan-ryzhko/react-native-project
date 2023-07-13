import { Controller } from "react-hook-form"
import { Text, TextInput, View } from "react-native"
import { controllInputStyles } from "./ControllInput.styles"
import { useEffect, useState } from "react";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const ControllInput = (
  { name, placeholder, control, error, keyboardType = "default" }
) => {

  const [visiblePassword, setVisiblePassword] = useState(false);

  useEffect(() => {
    if (name === "password") {
      setVisiblePassword(true);
    }
  }, [name]);

  const generatePattern = name => {
    switch (name) {
      case "email":
        return { pattern: emailRegex }
    }
  }

  return (
    <View>
      <Controller
        control={control}
        rules={{ required: true, ...generatePattern(name) }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            secureTextEntry={visiblePassword}
            keyboardType={keyboardType}
            placeholder={placeholder}
            onBlur={onBlur}
            style={controllInputStyles.input}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={name}
      />
      {
        error && <Text style={controllInputStyles.errorText}>
          {name} is required.
        </Text>
      }
    </View>
  )
}
