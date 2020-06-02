import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import rootStore from './src/stores/rootStore';
import AppNavigator from './src/navigation';

const initialState = {};
const store = rootStore(initialState);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
