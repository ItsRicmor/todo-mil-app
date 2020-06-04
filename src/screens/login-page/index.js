import React from 'react';
import { Text, StyleSheet, View, Linking } from 'react-native';
import Button from './components/button';
import InputText from './components/InputText';
import RouteEnum from '../../constants/RouteEnum';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Login</Text>
      <View style={styles.form}>
        <InputText placeholder="Email" name="email" />
        <InputText placeholder="Contraseña" name="password" />
        <Button label="Ingresar" onPress={() => navigation.navigate(RouteEnum.Home)} />
        <Text style={styles.text} onPress={() => navigation.navigate(RouteEnum.Register)}>
          Registrarse
        </Text>
        <Text style={styles.text} onPress={() => navigation.navigate(RouteEnum.Reset)}>
          ¿Olvidaste Contraseña?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  form: {
    flex: 8,
    justifyContent: 'center',
    width: '80%',
  },
  tittle: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 100,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
    color: '#5C45EE',
    paddingVertical: 4,
    marginTop: 2,
  },
});

export default LoginScreen;
