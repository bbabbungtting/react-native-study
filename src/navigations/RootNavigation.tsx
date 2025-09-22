import AuthNavigations from './AuthNavigation';
import DrawerNavigation from './DrawerNavigation';

function RootNavigation() {
  const isLogin = false;

  return <>{isLogin ? <DrawerNavigation /> : <AuthNavigations />}</>;
}

export default RootNavigation;
