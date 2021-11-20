import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Finished from './Components/Finished';
import InProgress from './Components/InProcess';
import Todo from './Components/Todo';

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
