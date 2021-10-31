/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/display-name */
import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import RouteEnum from '../constants/RouteEnum';
import HomeScreen from '../screens/home-screen';
import LoginScreen from '../screens/login-page';
import ResetPasswordScreen from '../screens/reset-password-page';
import RegisterScreen from '../screens/register-page';
import Profile from '../screens/profile-page';
import Records from '../screens/records-page';

const { Navigator, Screen } = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Navigator initialRouteName={RouteEnum.Login}>
      <Screen
        name={RouteEnum.Home}
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: null,
          headerTitle: () => (
            <Text
              style={{ fontWeight: 'bold', fontSize: 20 }}
              onPress={() => navigation.navigate(RouteEnum.Home)}
            >
              Menu Principal
            </Text>
          ),
          headerRight: () => (
            <Text
              style={{ marginRight: 20, fontWeight: 'bold', fontSize: 20 }}
              onPress={() => navigation.navigate(RouteEnum.Profile)}
            >
              Perfil
            </Text>
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
      <Screen name={RouteEnum.Records} component={Records} options={{ title: 'Historial' }} />
    </Navigator>
  );
};
