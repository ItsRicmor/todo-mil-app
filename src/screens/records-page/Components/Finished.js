import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getHourByFoodTime } from '../../../utils';
import { selectOrdersDone } from '../../../selectors/orders/OrderSelector';
import OrderAction from '../../../stores/orders/OrderAction';
import AuthService from '../../../services/AuthService';

const Finished = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrdersDone);

  useEffect(() => {
    const requestOrders = async () => {
      const { token, ...rest } = (await AuthService.getProfile()).user_data;
      const { client } = rest;
      dispatch(OrderAction.getOrders(client.id));
    };
    requestOrders();
  }, [dispatch]);
  alertItemName = item => {
    alert(item.name);
  };
  return (
    <ScrollView>
      <View>
        {orders.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => alertItemName(item)}
          >
            <Text style={[styles.text, styles.title]}>Pedido: {item.article.name}</Text>
            <Text style={styles.text}>
              Entrega: {item.deliveryDay} a las {getHourByFoodTime(item.foodTime)}
            </Text>
            <Text style={styles.text}>Precio: {item.article.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
export default Finished;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 10,
    backgroundColor: 'cyan',
    alignItems: 'center',
    marginRight: 50,
    marginLeft: 50,
    textShadowRadius: 20,
    borderRadius: 45,
    borderTopColor: 'black',
    borderWidth: 1,
  },
  text: {
    color: '#4f603c',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    textTransform: 'uppercase',
    borderColor: '#afa19c',
  },
});
