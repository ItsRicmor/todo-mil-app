import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Todo from './Components/Todo';
import InProgress from './Components/InProcess';
import Finished from './Components/Finished';

const { Navigator, Screen } = createMaterialTopTabNavigator();
const Index = () => {
  return (
    <Navigator>
      <Screen name="En espera" component={Todo} />
      <Screen name="En proceso" component={InProgress} />
      <Screen name="Finalizado" component={Finished} />
    </Navigator>
  );
};
export default Index;
