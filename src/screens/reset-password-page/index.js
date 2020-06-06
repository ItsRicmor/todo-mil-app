import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from './components/Button';
import InputText from './components/InputText';
import { useDispatch, useSelector } from 'react-redux';
import AuthAction from '../../stores/auth/AuthAction';
import { selectRequesting } from '../../selectors/requesting/RequestingSelector';
import Toasts from '../components/Toasts';

const ResetPasswordScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [isReady, setIsReady] = useState(false);
  const isRequesting = useSelector(state =>
    selectRequesting(state, [AuthAction.REQUEST_AUTH_FORGOT_PASSWORD]),
  );
  const [errorEmail, updateErrorEmail] = useState(false);
  const [error, updateError] = useState(false);

  const handleSubmit = async () => {
    if (email.trim() === '') {
      updateError(true);
      return;
    }

    if (!validateEmail(email)) {
      updateErrorEmail(true);
      return;
    }
    if (!!email) {
      dispatch(AuthAction.requestForgotPassword(email));
      setIsReady(true);
    }
  };

  const validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Restablecer Contraseña</Text>
      <View style={styles.form}>
        {isReady ? (
          <Text style={styles.text}>Revise sú correo electrónico</Text>
        ) : (
          <>
            <InputText value={email} onChangeText={setEmail} placeholder="Email" name="email" />
            {!errorEmail && error && (
              <Text style={styles.error}>Por favor llenar todos los campos</Text>
            )}
            {errorEmail && <Text style={styles.error}>Debe ser un correo valido</Text>}
            <Button label="Restablecer" onPress={handleSubmit} />
          </>
        )}
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
    textAlign: 'center',
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
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    paddingVertical: 4,
    marginBottom: 100,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
});

export default ResetPasswordScreen;
