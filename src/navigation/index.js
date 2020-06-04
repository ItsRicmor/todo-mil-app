import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RouteEnum from '../constants/RouteEnum';
import HomeScreen from '../screens/home-screen';
import LoginScreen from '../screens/login-page';
import ResetPasswordScreen from '../screens/reset-password-page';
import RegisterScreen from '../screens/register-page';

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
      <Screen
        name={RouteEnum.Reset}
        component={ResetPasswordScreen}
        options={{ title: 'Todo Mil' }}
      />
      <Screen
        name={RouteEnum.Register}
        component={RegisterScreen}
        options={{ title: 'Todo Mil' }}
      />
    </Navigator>
  );
};

export default AppNavigator;
