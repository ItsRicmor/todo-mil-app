import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Delivered from './Components/Delivered';
import InProgress from './Components/InProcess';
import Finished from './Components/Finished';

const { Navigator, Screen } = createMaterialTopTabNavigator();
const Index = () => {
  return (
    <Navigator>
      <Screen name="En Proceso" component={InProgress} />
      <Screen name="Finalizado" component={Finished} />
      <Screen name="Entregado" component={Delivered} />
    </Navigator>
  );
};
export default Index;
