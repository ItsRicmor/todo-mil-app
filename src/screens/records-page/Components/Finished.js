import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrdersDone } from '../../../selectors/orders/OrderSelector';
import AuthService from '../../../services/AuthService';
import OrderAction from '../../../stores/orders/OrderAction';
import { getHourByFoodTime } from '../../../utils';
import Toasts from '../../components/Toasts';

const Finished = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrdersDone);

  useFocusEffect(
    useCallback(() => {
      const requestOrders = async () => {
        const { token, ...rest } = (await AuthService.getProfile()).user_data;
        const { client } = rest;
        dispatch(OrderAction.getOrders(client.id));
      };
      requestOrders();
    }, [dispatch]),
  );
  return (
    <>
      <ScrollView>
        <View>
          {orders.map(item => (
            <View key={item.id} style={styles.container}>
              <Text style={[styles.text, styles.title]}>Pedido: {item.article.name}</Text>
              <Text style={styles.text}>Precio: {item.article.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <Toasts />
    </>
  );
};
export default Finished;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    marginTop: 30,
    backgroundColor: 'white',
    elevation: 2,
    marginRight: 75,
    marginLeft: 75,
    borderRadius: 4,
  },
  text: {
    color: '#000000',
    fontWeight: '700',
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
});
