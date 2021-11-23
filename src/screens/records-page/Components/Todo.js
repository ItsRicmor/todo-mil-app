import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrdersTodo } from '../../../selectors/orders/OrderSelector';
import AuthService from '../../../services/AuthService';
import OrderAction from '../../../stores/orders/OrderAction';
import Toasts from '../../components/Toasts';

const Todo = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrdersTodo);

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

  console.log(orders);
  return (
    <>
      <ScrollView>
        <View>
          {orders.map(item => (
            <View key={item.id} style={styles.container}>
              <Text style={[styles.text, styles.title]}>Producto: {item.article.name}</Text>
              <Text style={styles.text}>Categoría: {item.article.category.name}</Text>
              <Text style={styles.text}>Precio: {item.article.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <Toasts />
    </>
  );
};

export default Todo;

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
