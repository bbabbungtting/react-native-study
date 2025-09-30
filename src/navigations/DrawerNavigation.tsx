import {createDrawerNavigator} from '@react-navigation/drawer';
import CalendarScreen from '@/screens/calendar/CalendarScreen';
import {createStaticNavigation} from '@react-navigation/native';
import {MapStack} from './MapNavigation';
import {FeedStack} from './FeedNavigation';
import DrawerButton from '@/components/DrawerButton';
import {colors} from '@/constants/color';
import CustomDrawerContent from '@/components/CustomDrawerContent';
import {MainDrawerParamList} from '@/types/navigation';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import {SettingStack} from './SettingNavigation';

type DrawerIconName = 'map' | 'book' | 'calendar';

function DrawerIcons(routeName: keyof MainDrawerParamList, focused: boolean) {
  let iconName: DrawerIconName;

  switch (routeName) {
    case 'Map': {
      iconName = 'map';
      break;
    }
    case 'Feed': {
      iconName = 'book';
      break;
    }
    case 'Calendar': {
      iconName = 'calendar';
      break;
    }
    default: {
      iconName = 'calendar';
    }
  }

  return (
    <FontAwesome6
      name={iconName}
      iconStyle="solid"
      size={20}
      color={focused ? colors.WHITE : 'gray'}
    />
  );
}

const MainDrawer = createDrawerNavigator({
  screenOptions: ({route}) => {
    return {
      drawerStyle: {
        width: '60%',
        backgroundColor: colors.WHITE,
      },
      drawerLableStyle: {
        fontWeight: '600',
      },
      drawerItemStyle: {
        borderRadius: 10,
      },
      drawerType: 'front',
      drawerActiveTintColor: colors.WHITE,
      drawerInactiveTintColor: colors.BLACK,
      drawerActiveBackgroundColor: 'pink',
      drawerInactiveBackgroundColor: 'yellow',
      drawerIcon: ({focused}) =>
        DrawerIcons(route.name as keyof MainDrawerParamList, focused),
      // Header
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
    };
  },
  screens: {
    Map: {
      screen: MapStack,
      options: {
        title: '홈',
        headerShown: false,
      },
    },
    Feed: {
      screen: FeedStack,
      options: {
        title: '피드',
        headerShown: false,
      },
    },
    Calender: {
      screen: CalendarScreen,
      options: {
        title: '캘린더',
        headerLeft: () => <DrawerButton />,
      },
    },
    Setting: {
      screen: SettingStack,
      options: {
        title: '설정',
        headerShown: false,
        drawerItemStyle: {
          height: 0,
        },
      },
    },
  },
  drawerContent: props => <CustomDrawerContent {...props} />,
});

const DrawerNavigation = createStaticNavigation(MainDrawer);

export default DrawerNavigation;
