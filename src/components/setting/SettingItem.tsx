import {Text, StyleSheet, View, Pressable, PressableProps} from 'react-native';
import React, {Component} from 'react';

interface SettingItemProps extends PressableProps {
  title: string;
  color?: string;
}

export default function SettingItem({
  title,
  color,
  ...props
}: SettingItemProps) {
  return (
    <Pressable
      {...props}
      style={({pressed}) => [
        styles.container,
        pressed && styles.pressedContainer,
      ]}>
      <Text style={[styles.titleText, {color: color ?? 'black'}]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    padding: 15,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  pressedContainer: {
    backgroundColor: 'gray',
  },
  titleText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
});
