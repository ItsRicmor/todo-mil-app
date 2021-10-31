/* eslint-disable @typescript-eslint/camelcase */
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { Provider } from 'react-redux';
import { AppNavigator } from './src/navigation';
import { rootStore } from './src/stores/rootStore';

const initialState = {};
const store = rootStore(initialState);

const App = () => (
  <NativeBaseProvider>
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  </NativeBaseProvider>
);

export default App;
