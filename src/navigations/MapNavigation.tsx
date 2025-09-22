import {createStackNavigator} from '@react-navigation/stack';
import MapHomeScreen from '../screens/map/MapHomeScreen';
import AddLocationScreen from '../screens/map/AddLocationScreen';
import SearchLocationScreen from '../screens/map/SearchLocationScreen';

export const MapStack = createStackNavigator({
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
      fontSize: 12,
    },
  },
  screens: {
    MapHome: {
      screen: MapHomeScreen,
      options: {
        headerShown: false,
      },
    },
    AddLocation: {
      screen: AddLocationScreen,
    },
    SearchLocation: {
      screen: SearchLocationScreen,
    },
  },
});
