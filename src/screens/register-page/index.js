import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { Icon, Picker, Form } from 'native-base';
import Button from './components/Button';
import InputText from './components/InputText';
import { useDispatch, useSelector } from 'react-redux';
import AuthAction from '../../stores/auth/AuthAction';
import { useNavigation } from '@react-navigation/native';
import RouteEnum from '../../constants/RouteEnum';
import { selectAuthenticated } from '../../selectors/auth/AuthSelector';
import Toasts from '../components/Toasts';

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
    clientType: 'STUDENT',
    email: '',
    lastName: '',
    name: '',
  });
  const [error, updateError] = useState(false);
  const [errorEmail, updateErrorEmail] = useState(false);
  const [errorNumber, updateErrorNumber] = useState(false);

  useEffect(() => {
    if (authenticated) {
      navigation.navigate(RouteEnum.Home);
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
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Registrarse</Text>
        <View style={styles.form}>
          <InputText value={name} onChangeText={handleChangeClient('name')} placeholder="Nombre" />
          <InputText
            value={lastName}
            onChangeText={handleChangeClient('lastName')}
            placeholder="Apellidos"
          />
          <InputText
            value={cellphone}
            onChangeText={handleChangeClient('cellphone')}
            placeholder="Telefono"
          />
          <InputText value={email} onChangeText={handleChangeClient('email')} placeholder="Email" />
          <Form>
            <Picker
              mode="dropdown"
              selectedValue={clientType}
              onValueChange={itemValue => setClient({ ...client, clientType: itemValue })}
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your SIM"
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
            >
              <Picker.Item label="Estudiante" value="STUDENT" />
              <Picker.Item label="Profesor" value="PROFESSOR" />
              <Picker.Item label="Administrativo" value="ADMINISTRATIVE" />
            </Picker>
          </Form>
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
            <Text style={styles.error}>Debe ser un correo valido</Text>
          )}
          {errorNumber && <Text style={styles.error}>Numero de telefono debe ser numerico</Text>}
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
  error: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
});

export default RegisterScreen;
