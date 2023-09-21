import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { theme } from "../styles/theme";

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  keyboardType,
  ...otherProps
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.colors.secondary}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        keyboardType={keyboardType}
        style={[
          styles.textInput,
          focused && { borderWidth: 1, borderColor: theme.colors.primary },
        ]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  textInput: {
    fontSize: theme.fontSize.small,
    padding: 15,
    backgroundColor: theme.colors.lightPrimary,
    borderRadius: 20,
    marginVertical: 10,
  },
});
