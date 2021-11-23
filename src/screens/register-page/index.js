import React, { useState, useEffect } from 'react';
import InputText from '../login-page/components/InputText';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import RouteEnum from '../../constants/RouteEnum';
import { selectAuthenticated } from '../../selectors/auth/AuthSelector';
import AuthAction from '../../stores/auth/AuthAction';
import Toasts from '../components/Toasts';
import Button from './components/Button';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const authenticated = useSelector(state => selectAuthenticated(state));
  const [user, setUser] = useState({
    password: '',
    username: '',
    roles: ['ROLE_CLIENT'],
  });

  const [client, setClient] = useState({
    cellphone: '',
    email: '',
    lastName: '',
    name: '',
  });
  const [error, updateError] = useState(false);
  const [errorEmail, updateErrorEmail] = useState(false);
  const [errorNumber, updateErrorNumber] = useState(false);

  useEffect(() => {
    if (authenticated) {
      navigation.reset({
        index: 0,
        routes: [{ name: RouteEnum.Home }],
      });
    }
  }, [navigation, authenticated]);

  const handleSubmit = e => {
    e.preventDefault();
    const { cellphone, email, lastName, name } = client;
    const { password, username } = user;
    if (
      username.trim() === '' ||
      password.trim() === '' ||
      cellphone.trim() === '' ||
      email.trim === '' ||
      lastName.trim() === '' ||
      name.trim() === ''
    ) {
      updateError(true);
      return;
    }
    if (!validateEmail(email)) {
      updateErrorEmail(true);
      return;
    }
    if (isNaN(cellphone)) {
      updateErrorNumber(true);
      return;
    }

    if (!!username && !!password && !!cellphone && !!email && !!lastName && !!name) {
      dispatch(AuthAction.requestRegister({ ...user, client }));
    }
  };

  const handleChangeUser = name => value => {
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleChangeClient = name => value => {
    setClient({
      ...client,
      [name]: value,
    });
  };

  const validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const { cellphone, email, lastName, name, clientType } = client;
  const { password, username } = user;

  return (
    <ScrollView contentContainerStyle={{ height: '100%' }}>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>Registrarse</Text>
          <InputText value={name} onChangeText={handleChangeClient('name')} placeholder="Nombre" />
          <InputText
            value={lastName}
            onChangeText={handleChangeClient('lastName')}
            placeholder="Apellidos"
          />
          <InputText
            value={cellphone}
            onChangeText={handleChangeClient('cellphone')}
            placeholder="Teléfono"
            keyboardType="numeric"
            maxLength={8}
            minLength={8}
          />
          <InputText value={email} onChangeText={handleChangeClient('email')} placeholder="Email" />
          <InputText
            value={username}
            onChangeText={handleChangeUser('username')}
            placeholder="Username"
          />
          <InputText
            value={password}
            secureTextEntry={true}
            onChangeText={handleChangeUser('password')}
            placeholder="Contraseña"
          />
          {!errorEmail && error && (
            <Text style={styles.error}>Por favor llenar todos los campos</Text>
          )}
          {!errorNumber && errorEmail && (
            <Text style={styles.error}>Debe ser un correo válido</Text>
          )}
          {errorNumber && <Text style={styles.error}>El número de teléfono debe ser numérico</Text>}
          <Button onPress={handleSubmit} label="Registrar" />
        </View>
      </View>
      <Toasts />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    width: '100%',
    margin: 10,
    paddingHorizontal: 30,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    padding: 15,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
});

export default RegisterScreen;
