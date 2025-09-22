import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {FeedStackParamList} from '../../types/navigation';

// FeedStackParamList 라는 타입 중에서 'FeedDetail' 을 정확하게 선언
type Props = StackScreenProps<FeedStackParamList, 'FeedDetail'>;

export default function FeedDetailScreen({route}: Props) {
  const {id} = route.params;

  return (
    <SafeAreaView>
      <Text>FeedDetailScreen</Text>
      <Text> {id}번 장소 입니다. </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
