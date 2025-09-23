import {createStackNavigator} from '@react-navigation/stack';
import AuthHomeScreen from '../screens/auth/AuthHomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import {createStaticNavigation} from '@react-navigation/native';

const AuthStack = createStackNavigator({
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
    cardStyle: {
      //전체 아래 배경 색 설정
      backgroundColor: 'white',
    },
  },
  screens: {
    AuthHome: {
      screen: AuthHomeScreen,
      options: {
        headerShown: false, // 헤더 숨김
      },
    },
    Login: {
      screen: LoginScreen,
      options: {
        title: '로그인',
      },
    },
    Signup: {
      screen: SignupScreen,
      options: {
        title: '회원가입',
      },
    },
  },
});

const AuthNavigations = createStaticNavigation(AuthStack);

export default AuthNavigations;
