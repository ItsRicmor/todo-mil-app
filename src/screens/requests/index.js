import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Delivered from './Components/Delivered';
import InProgress from './Components/InProcess';
import Finished from './Components/Finished';

const Tab = createMaterialTopTabNavigator();
const List = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Entregado" component={Delivered} />
      <Tab.Screen name="En Proceso" component={InProgress} />
      <Tab.Screen name="Finalizado" component={Finished} />
    </Tab.Navigator>
  );
};
export default List;
