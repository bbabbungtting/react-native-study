import React, {useRef} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import useForm from '@/hooks/useForm';
import {validateLogin} from '@/utils/validation';
import {TextInput} from 'react-native-gesture-handler';

export default function LoginScreen() {
  const passwordRef = useRef<TextInput | null>(null);
  const logIn = useForm({
    initialValue: {email: '', password: ''},
    validate: validateLogin,
  });

  const handleSummit = () => {
    console.log('login.values', logIn.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          autoFocus
          placeholder="이메일"
          submitBehavior="submit"
          returnKeyType="next"
          inputMode="email"
          onSubmitEditing={() => passwordRef.current?.focus()}
          touched={logIn.touched.email}
          error={logIn.errors.email}
          {...logIn.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          secureTextEntry
          textContentType="oneTimeCode"
          placeholder="비밀번호"
          returnKeyType="join"
          maxLength={20}
          onSubmitEditing={handleSummit}
          touched={logIn.touched.password}
          error={logIn.errors.password}
          {...logIn.getTextInputProps('password')}
        />
        <CustomButton
          label="로그인"
          variant="filled"
          size="large"
          onPress={handleSummit}
        />
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
