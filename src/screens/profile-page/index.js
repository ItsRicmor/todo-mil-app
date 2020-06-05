import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RouteEnum from '../../constants/RouteEnum';
import Button from './components/Button';
import Image from './components/Image';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Usuario</Text>
          <Text style={styles.info}>Este es su perfil de usuario</Text>

          <Button label="Ver historial" onPress={() => navigation.navigate(RouteEnum.Records)} />
          <Button label="Desconectarse" />
        </View>
      </View>
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
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
});
export default Profile;
