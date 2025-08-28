import React from 'react';
import { Pressable, Text, ViewStyle, TextStyle, StyleProp } from 'react-native';

import Colors from '../constants/Color';
import { useTheme } from '../providers/ThemeProviders';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle }) => {
  const { theme: resolvedTheme } = useTheme(); 
  const theme = Colors[resolvedTheme]; 

  return (
    <Pressable
      style={(state) => [
        { backgroundColor: theme.button },
        buttonStyles.base,
        state.pressed && { opacity: 0.7 }, 
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[buttonStyles.text, { color: theme.buttonText }, textStyle]}>
        {title}
      </Text>
    </Pressable>
  );
};


const buttonStyles = {
  base: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  } as const,

  text: {
    fontSize: 16,
    fontWeight: 'bold' as const,
  } as const,
};

export default Button;