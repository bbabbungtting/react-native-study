import useAuth from '@/hooks/queries/useAuth';
import Ionicons from '@react-native-vector-icons/ionicons';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export default function CustomDrawerContent(
  props: DrawerContentComponentProps,
) {
  const {auth} = useAuth();
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <DrawerContentScrollView
          {...props}
          scrollEnabled={false}
          contentContainerStyle={styles.contentContainer}>
          <Pressable style={styles.profileContainer}>
            <View style={styles.userImageContainer}>
              <Image
                source={require('@/assets/images/rn.png')}
                style={styles.userImage}
              />
            </View>
            <Text style={styles.nickName}>
              {auth.nickname} {auth.id}
            </Text>
          </Pressable>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View style={styles.bottomContainer}>
          <Pressable
            style={styles.bottomMenu}
            onPress={() => navigation.navigate('Setting')}>
            <Ionicons name="settings-outline" size={20} color={'black'} />
            <Text style={styles.menuText}>설정</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    gap: 5,
    marginTop: 30,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
    gap: 5,
  },
  userImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  userImage: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
  },
  nickName: {
    fontSize: 14,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  menuText: {fontSize: 15},
  bottomMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
});
