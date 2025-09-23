import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import useForm from '@/hooks/useForm';
import {validateLogin} from '@/utils/validation';
import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

export default function LoginScreen() {
  const logIn = useForm({
    initialValue: {email: '', password: ''},
    validate: validateLogin,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="아이디"
          touched={logIn.touched.email}
          error={logIn.errors.email}
          {...logIn.getTextInputProps('email')}
        />
        <InputField
          secureTextEntry
          textContentType="oneTimeCode"
          placeholder="비밀번호"
          maxLength={20}
          touched={logIn.touched.password}
          error={logIn.errors.password}
          {...logIn.getTextInputProps('password')}
        />
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
