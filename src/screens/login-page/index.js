import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RouteEnum from '../../constants/RouteEnum';
import { selectAuthenticated } from '../../selectors/auth/AuthSelector';
import AuthService from '../../services/AuthService';
import AuthAction from '../../stores/auth/AuthAction';
import Toasts from '../components/Toasts';
import Button from './components/Button';
import InputText from './components/InputText';

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
      <Text style={styles.tittle}>Login</Text>
      <View style={styles.form}>
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
        {error && <Text style={styles.error}>Por favor llenar todos los campos</Text>}
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
    flex: 8,
    justifyContent: 'center',
    width: '80%',
    fontWeight: 'bold',
  },
  tittle: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 50,
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
