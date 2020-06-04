/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import rootStore from './src/stores/rootStore';
import AppNavigator from './src/navigation';

const initialState = {};
const store = rootStore(initialState);

const App = () => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const asyncFonts = async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      setIsReady(true);
    };
    asyncFonts();
  }, []);
  if (!isReady) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
