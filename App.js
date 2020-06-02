import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import rootStore from './src/stores/rootStore';
import RouteEnum from './src/constants/RouteEnum';
import HomeScreen from './src/screens/home-screen';

const initialState = {};
const store = rootStore(initialState);
const { Navigator, Screen } = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator initialRouteName={RouteEnum.Home}>
          <Screen name={RouteEnum.Home} component={HomeScreen} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
