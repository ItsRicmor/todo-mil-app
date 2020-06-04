/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/display-name */
import React from 'react';
import { Button, Text } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import RouteEnum from '../constants/RouteEnum';
import HomeScreen from '../screens/home-screen';
import LoginScreen from '../screens/login-page';
import ResetPasswordScreen from '../screens/reset-password-page';
import RegisterScreen from '../screens/register-page';
import Profile from '../screens/profile';
import { useNavigation } from '@react-navigation/native';

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => {
  return (
    <Navigator initialRouteName={RouteEnum.Login}>
      <Screen
        name={RouteEnum.Home}
        component={HomeScreen}
        options={({ navigation }) => ({
          Title: 'Todo Mil',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate(RouteEnum.Profile)}
              style={{ marginRight: 10 }}
              small
              light
            >
              <Text>Profile</Text>
            </Button>
          ),
        })}
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
      <Screen name={RouteEnum.Profile} component={Profile} options={{ title: 'Perfil' }} />
    </Navigator>
  );
};

export default AppNavigator;
