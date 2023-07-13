import { Controller } from "react-hook-form"
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native"
import { controllInputStyles } from "./ControllInput.styles"
import { useEffect, useState } from "react";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const ControllInput = (
  { name, placeholder, control, error, keyboardType = "default" }
) => {

  const [visibleValue, setVisibleValue] = useState(false);

  const isPassword = name === "password";

  useEffect(() => {
    if (isPassword) {
      setVisibleValue(true);
    }
  }, [name]);

  const generatePattern = name => {
    switch (name) {
      case "email":
        return { pattern: emailRegex }
    }
  }

  const toggleVisiblePassword = () => {
    setVisibleValue(prev => !prev);
  }

  return (
    <View style={controllInputStyles.label}>
      <Controller
        control={control}
        rules={{ required: true, ...generatePattern(name) }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            secureTextEntry={visibleValue}
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
      {
        isPassword && 
        <TouchableOpacity
          onPress={toggleVisiblePassword}
          style={controllInputStyles.togglePwd}
        >
          <Text style={controllInputStyles.togglePwdText}>
            {
              visibleValue ? "Показати" : "Сховати"
            }
          </Text>
        </TouchableOpacity>
      }
    </View>
  )
}
