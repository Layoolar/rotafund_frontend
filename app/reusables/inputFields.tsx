import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Colors from '../constants/Color';

interface InputFieldProps extends Omit<TextInputProps, 'style'> {
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  containerStyle,
  inputStyle,
  ...rest
}) => {
  const colorScheme = rest.keyboardAppearance || (require('react-native').useColorScheme?.() ?? 'light');
  const theme = Colors[colorScheme === 'dark' ? 'dark' : 'light'];

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, { color: theme.label }]}>{label}</Text>
      <TextInput
        {...rest}
        style={[
          styles.input,
          {
            backgroundColor: theme.inputBackground,
            borderColor: theme.inputBorder,
            color: theme.text,
          },
          inputStyle,
        ]}
        placeholderTextColor={theme.text === '#000' ? '#555' : '#999'} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default InputField;