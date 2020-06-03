import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RouteEnum from '../constants/RouteEnum';
import HomeScreen from '../screens/home-screen';
import LoginScreen from '../screens/login-page';

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => {
  return (
    <Navigator initialRouteName={RouteEnum.Login}>
      <Screen
        name={RouteEnum.Home}
        component={HomeScreen}
        options={{ title: 'Pagina Principal' }}
      />
      <Screen name={RouteEnum.Login} component={LoginScreen} options={{ title: 'Todo Mil' }} />
    </Navigator>
  );
};

export default AppNavigator;
