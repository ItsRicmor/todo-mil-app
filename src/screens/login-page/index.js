import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Button from './components/Button';
import InputText from './components/InputText';
import RouteEnum from '../../constants/RouteEnum';
import AuthAction from '../../stores/auth/AuthAction';
import { useNavigation } from '@react-navigation/native';
import { selectAuthenticated } from '../../selectors/auth/AuthSelector';

import { useSelector, useDispatch } from 'react-redux';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const authenticated = useSelector(state => selectAuthenticated(state));
  const [state, setState] = useState({ username: '', password: '' });

  const handleChange = name => value => {
    setState({
      ...state,
      [name]: value,
    });
  };

  useEffect(() => {
    if (authenticated) {
      navigation.navigate(RouteEnum.Home);
    }
  }, [navigation, authenticated]);

  const handleSubmit = () => {
    const { username, password } = state;
    if (!!username && !!password) {
      dispatch(AuthAction.requestLogin(username, password));
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
});

export default LoginScreen;
