import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';

interface SignupScreenProps {}

export default function SignupScreen({}: SignupScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField placeholder="아이디" />
        <InputField placeholder="비밀번호" />
        <InputField placeholder="비밀번호 확인" />
        <CustomButton label="회원가입" variant="filled" size="large" />
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
