import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import DrawerButton from '@/components/DrawerButton';

interface MapHomeScreenProps {}

export default function MapHomeScreen({}: MapHomeScreenProps) {
  return (
    <SafeAreaView>
      <Text>MapHomeScreen</Text>
      <DrawerButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
