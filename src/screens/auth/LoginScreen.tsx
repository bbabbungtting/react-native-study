import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

interface LoginScreenProps {}

export default function LoginScreen({}: LoginScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField placeholder="아이디" />
        <InputField placeholder="비밀번호" />
        <CustomButton label="로그인" variant="filled" size="large" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
  },
});
