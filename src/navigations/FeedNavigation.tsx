import {createStackNavigator} from '@react-navigation/stack';
import FeedListScreen from '../screens/feed/FeedListScreen';
import FeedDetailScreen from '../screens/feed/FeedDetailScreen';
import FeedFavoriteScreen from '../screens/feed/FeedFavoriteScreen';
import EditLocationScreen from '../screens/feed/EditLocationScreen';
import DrawerButton from '../components/DrawerButton';

export const FeedStack = createStackNavigator({
  screenOptions: {
    headerTitleAlign: 'center', // 헤더 공통 정렬
    headerBackButtonDisplayMode: 'minimal', // ios 뒤 버튼 페이지명 숨김처리
    headerTintColor: 'black', // 헤더 글자색
    headerStyle: {
      backgroundColor: 'gray',
      shadowColor: 'black', // 아래 선
    },
    headerTitleStyle: {
      // 글자 폰트 설정
      fontSize: 14,
    },
  },
  screens: {
    FeedList: {
      screen: FeedListScreen,
      options: {
        title: '피드',
        headerLeft: () => <DrawerButton />,
      },
    },
    FeedDetail: {
      screen: FeedDetailScreen,
    },
    FeedFavorite: {
      screen: FeedFavoriteScreen,
    },
    EditLocation: {
      screen: EditLocationScreen,
    },
  },
});
