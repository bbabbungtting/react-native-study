import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import DrawerButton from '@/components/DrawerButton';
import useAuth from '@/hooks/queries/useAuth';

interface MapHomeScreenProps {}

export default function MapHomeScreen({}: MapHomeScreenProps) {
  const {logoutMutation} = useAuth();

  return (
    <SafeAreaView>
      <Text>MapHomeScreen</Text>
      <DrawerButton />
      <Text onPress={() => logoutMutation.mutate(null)}>로그 아웃</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
