import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { theme } from "../styles/theme";

const CustomRowInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  keyboardType,
  ...otherProps
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={theme.colors.secondary}
      value={value}
      onChangeText={setValue}
      secureTextEntry={secureTextEntry}
      autoCapitalize="none"
      keyboardType={keyboardType}
      style={[
        styles.textRowInputs,
        focused && { borderWidth: 1, borderColor: theme.colors.primary },
      ]}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
};

export default CustomRowInput;

const styles = StyleSheet.create({
  textRowInputs: {
    fontSize: theme.fontSize.small,
    padding: 15,
    borderRadius: 20,
    backgroundColor: theme.colors.lightPrimary,
    width: "48%",
  },
});
