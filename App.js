import React from 'react';
import { Provider } from 'react-redux';
import rootStore from './src/stores/rootStore';
import { Home } from './src/screens';

const initialState = {};
const store = rootStore(initialState);

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
