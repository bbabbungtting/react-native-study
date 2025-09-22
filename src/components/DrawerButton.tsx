import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {MainDrawerParamList} from '../types/navigation';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import Ionicons from '@react-native-vector-icons/ionicons';
import {colors} from '../constants/color';

type Navigatiton = DrawerNavigationProp<MainDrawerParamList>;

export default function DrawerButton({color = colors.BLACK}) {
  const navigation = useNavigation<Navigatiton>();

  return (
    <Pressable style={styles.container} onPress={() => navigation.openDrawer()}>
      <Ionicons name="menu" size={25} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
});
