import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrdersInProgress } from '../../../selectors/orders/OrderSelector';
import AuthService from '../../../services/AuthService';
import OrderAction from '../../../stores/orders/OrderAction';
import { getHourByFoodTime } from '../../../utils';
import Toasts from '../../components/Toasts';

const InProgress = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrdersInProgress);
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
            <TouchableOpacity key={item.id} style={styles.container}>
              <Text style={[styles.text, styles.title]}>Pedido: {item.article.name}</Text>
              <Text style={styles.text}>
                Entrega: {item.deliveryDay} a las {getHourByFoodTime(item.foodTime)}
              </Text>
              <Text style={styles.text}>Precio: {item.article.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Toasts />
    </>
  );
};
export default InProgress;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 10,
    backgroundColor: '#ff9800',
    alignItems: 'center',
    elevation: 10,
    marginRight: 50,
    marginLeft: 50,
    textShadowRadius: 10,
    borderRadius: 5,
    borderTopColor: 'black',
    borderWidth: 1,
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    textTransform: 'uppercase',
    borderColor: '#afa19c',
  },
});
