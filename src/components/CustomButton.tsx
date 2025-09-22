import React from 'react';

import {StyleSheet, Pressable, Text, PressableProps} from 'react-native';
import {colors} from '@/constants/color';

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'large' | 'small';
}

function CustomButton({
  label,
  variant = 'filled',
  size = 'large',
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        styles[variant],
        styles[size],
        pressed && styles.pressed,
      ]}
      {...props}>
      <Text style={styles[`${variant}Text`]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filled: {
    backgroundColor: 'pink',
  },
  outlined: {
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: 'pink',
  },
  filledText: {fontSize: 14, fontWeight: 'bold', color: colors.WHITE},
  outlinedText: {fontSize: 14, fontWeight: 'bold', color: 'pink'},
  large: {width: '100%', height: 45},
  small: {paddingHorizontal: 10, height: 35},
  pressed: {opacity: 0.8},
});

export default CustomButton;
