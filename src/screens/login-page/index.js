import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Button from './components/button';
import InputText from './components/InputText';
import RouteEnum from '../../constants/RouteEnum';
import AuthAction from '../../stores/auth/AuthAction';
import { useNavigation } from '@react-navigation/native';
import { selectAuthenticated } from '../../selectors/auth/AuthSelector';
import Profile from '../profile-page/components/Image';

import { useSelector, useDispatch } from 'react-redux';
import AuthService from '../../services/AuthService';
import Toasts from '../components/Toasts';
import { flex } from 'styled-system';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const authenticated = useSelector(state => selectAuthenticated(state));
  const [state, setState] = useState({ username: '', password: '' });
  const [error, updateError] = useState(false);

  const handleChange = name => value => {
    setState({
      ...state,
      [name]: value,
    });
  };

  useEffect(() => {
    const verifyLogin = async () => {
      if (await AuthService.loggedIn()) {
        const { token, ...rest } = (await AuthService.getProfile()).user_data;
        dispatch(AuthAction.changeAuth({ authenticated: true, ...rest }));
      } else {
        dispatch(AuthAction.changeAuth({ authenticated: false }));
      }
    };
    verifyLogin();
  }, [dispatch]);

  useEffect(() => {
    if (authenticated) {
      navigation.navigate(RouteEnum.Home);
    }
  }, [navigation, authenticated]);

  const handleSubmit = () => {
    const { username, password } = state;

    if (username.trim() === '' || password.trim() === '') {
      updateError(true);
      return;
    }
    if (!!username && !!password) {
      dispatch(AuthAction.requestLogin(username, password));
      setState({ username: '', password: '' });
    }
  };

  const { username, password } = state;

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Profile />
        <Text style={styles.tittle}>Login</Text>
        {error && <Text style={styles.error}>Por favor llenar todos los campos</Text>}
        <InputText
          value={username}
          onChangeText={handleChange('username')}
          placeholder="Username"
        />
        <InputText
          value={password}
          secureTextEntry={true}
          onChangeText={handleChange('password')}
          placeholder="Contraseña"
        />
        <Button color="cyan" label="Ingresar" onPress={handleSubmit} />
        <Text style={styles.text} onPress={() => navigation.navigate(RouteEnum.Register)}>
          Registrarse
        </Text>
        <Text style={styles.text} onPress={() => navigation.navigate(RouteEnum.Reset)}>
          ¿Olvidaste Contraseña?
        </Text>
      </View>
      <Toasts />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },
  form: {
    height: '100%',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    alignItems: 'center',
  },
  tittle: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
    color: 'black',
    paddingVertical: 4,
    marginTop: 2,
    fontWeight: 'bold',
    fontSize: 15,
  },
  error: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;
