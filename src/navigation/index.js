import { createStackNavigator } from '@react-navigation/stack';
import RouteEnum from '../constants/RouteEnum';
import HomeScreen from '../screens/index';

const AppNavigator = createStackNavigator(
  {
    [RouteEnum.Home]: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'HomeScreen',
      }),
    },
  },
  { initialRouteName: RouteEnum.Home },
);

export default AppNavigator;
