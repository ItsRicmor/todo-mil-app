import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RouteEnum from '../../constants/RouteEnum';
import Button from './components/Button';
import Image from './components/Image';
import AuthService from '../../services/AuthService';
import { useDispatch } from 'react-redux';
import AuthAction from '../../stores/auth/AuthAction';
import Toasts from '../components/Toasts';

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
      <View style={styles.header}></View>
      <Image />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>{client.name + ' ' + client.lastName}</Text>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.info}>Telefono: {client.cellphone}</Text>
            <Text style={styles.info}>email: {client.email}</Text>
            <View style={{ marginTop: 80 }}></View>
            <Button label="Pedidos" onPress={() => navigation.navigate(RouteEnum.Records)} />
            <Button label="Desconectarse" onPress={onLogout} />
          </View>
        </View>
      </View>
      <Toasts />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'cyan',
    height: 200,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    marginBottom: 0,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
});
export default Profile;
