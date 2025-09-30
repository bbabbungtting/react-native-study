import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {FeedStackParamList} from '@/types/navigation';
import {FlatList} from 'react-native-gesture-handler';

type Navigation = StackNavigationProp<FeedStackParamList>;

export default function FeedListScreen() {
  const navigation = useNavigation<Navigation>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FeedListScreen</Text>
      <Text
        style={styles.place}
        onPress={() => navigation.navigate('FeedDetail', {id: 1})}>
        1번 장소
      </Text>
      <Text
        style={styles.place}
        onPress={() => navigation.navigate('FeedDetail', {id: 2})}>
        2번 장소
      </Text>
      <Text
        style={styles.place}
        onPress={() => navigation.navigate('FeedDetail', {id: 3})}>
        3번 장소
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    gap: 5,
  },
  title: {
    padding: 10,
    backgroundColor: 'green',
  },
  place: {
    padding: 10,
    backgroundColor: 'blue',
  },
});
