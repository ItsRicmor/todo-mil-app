import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import RouteEnum from '../../constants/RouteEnum';
import AuthService from '../../services/AuthService';
import AuthAction from '../../stores/auth/AuthAction';
import Toasts from '../components/Toasts';
import Button from './components/Button';
import Image from './components/Image';

const Profile = () => {
  const navigation = useNavigation();
  const [client, setClient] = useState({});
  const dispatch = useDispatch();
  const onLogout = async () => {
    await AuthService.logout();
    dispatch(AuthAction.logout());
    navigation.navigate(RouteEnum.Login);
  };

  useEffect(() => {
    const requestOrders = async () => {
      const { token, ...rest } = (await AuthService.getProfile()).user_data;
      const { client } = rest;
      setClient(client);
    };
    requestOrders();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Image />
      <Text style={styles.name}>{client.name + ' ' + client.lastName}</Text>
      <View>
        <View style={styles.info}>
          <Text style={{ fontWeight: 'bold', width: '35%' }}>Teléfono:</Text>
          <Text>{client.cellphone}</Text>
        </View>
        <View style={styles.info}>
          <Text style={{ fontWeight: 'bold', color: 'black', width: '35%' }}>Email:</Text>
          <Text style={{ color: 'black' }}>{client.email}</Text>
        </View>

        <View style={{ marginTop: 90 }}>
          <Button label="Pedidos" onPress={() => navigation.navigate(RouteEnum.Records)} />
          <Button label="Cerrar sesión" onPress={onLogout} />
        </View>
      </View>
      <Toasts />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '700',
    marginBottom: 30,
  },
  info: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    marginBottom: 0,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1.2,
    borderBottomColor: 'black',
  },
});
export default Profile;
