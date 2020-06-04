import React from 'react';
import { Text, StyleSheet, View, Linking } from 'react-native';
import Button from './components/Button';
import InputText from './components/InputText';

const ResetPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Restablecer Contraseña</Text>
      <View style={styles.form}>
        <InputText placeholder="Email" name="email" />
        <Button label="Restablecer" />
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

export default ResetPasswordScreen;
