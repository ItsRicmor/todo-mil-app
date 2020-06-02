import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RouteEnum from '../constants/RouteEnum';
import HomeScreen from '../screens/home-screen';

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => {
  return (
    <Navigator initialRouteName={RouteEnum.Home}>
      <Screen
        name={RouteEnum.Home}
        component={HomeScreen}
        options={{ title: 'Pagina Principal' }}
      />
    </Navigator>
  );
};

export default AppNavigator;
