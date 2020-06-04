import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { Icon, Picker, Form } from 'native-base';
import Button from './components/Button';
import InputText from './components/InputText';

const RegistrerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <View style={styles.form}>
        <InputText placeholder="Nombre" name="name" />
        <InputText placeholder="Apellidos" name="lastName" />
        <InputText placeholder="Telefono" name="phone" />
        <Form>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            placeholder="Select your SIM"
            placeholderStyle={{ color: '#bfc6ea' }}
            placeholderIconColor="#007aff"
            style={{ width: undefined }}
          >
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
          </Picker>
        </Form>
        <InputText placeholder="Email" name="email" />
        <InputText placeholder="Contraseña" name="password" />
        <Button label="Registrar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
  },
  form: {
    flex: 1,
    margin: 10,
    padding: 30,
    width: '90%',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 25,
    padding: 30,
    margin: 15,
    fontWeight: 'bold',
    marginBottom: 0,
  },
});

export default RegistrerScreen;
