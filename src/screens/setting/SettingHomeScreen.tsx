import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import SettingItem from '@/components/setting/SettingItem';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SettingStackParamList} from '@/types/navigation';
import useAuth from '@/hooks/queries/useAuth';

type Navigation = NavigationProp<SettingStackParamList>;
// const {logoutMutation} = useAuth();

export default function SettingHomeScreen() {
  const navigation = useNavigation<Navigation>();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.space} />
          <SettingItem
            title="프로필 수정"
            onPress={() => navigation.navigate('EditProfile')}
          />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />
          <SettingItem title="다크 모드" />

          <View style={styles.space} />
          <SettingItem
            title="로그 아웃"
            color={'red'}
            // onPress={() => logoutMutation.mutate(null)}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  space: {
    height: 30,
  },
});
