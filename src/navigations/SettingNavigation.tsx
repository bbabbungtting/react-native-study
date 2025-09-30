import {createStackNavigator} from '@react-navigation/stack';
import DrawerButton from '@/components/DrawerButton';
import EditProfileScreen from '@/screens/setting/EditProfileScreen';
import SettingHomeScreen from '@/screens/setting/SettingHomeScreen';

export const SettingStack = createStackNavigator({
  screenOptions: {
    headerTitleAlign: 'center', // 헤더 공통 정렬
    headerBackButtonDisplayMode: 'minimal', // ios 뒤 버튼 페이지명 숨김처리
    headerTintColor: 'black', // 헤더 글자색
    headerStyle: {
      backgroundColor: 'orange',
      shadowColor: 'black', // 아래 선
    },
    headerTitleStyle: {
      // 글자 폰트 설정
      fontSize: 16,
    },
  },
  screens: {
    SettingHome: {
      screen: SettingHomeScreen,
      options: {
        title: '설정',
        headerLeft: () => <DrawerButton />,
        cardStyle: {
          backgroundColor: 'gray',
        },
      },
    },
    EditProfile: {
      screen: EditProfileScreen,
      options: {
        title: '프로필 수정',
        cardStyle: {
          backgroundColor: 'white',
        },
      },
    },
  },
});
