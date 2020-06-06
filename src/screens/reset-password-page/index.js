import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from './components/Button';
import InputText from './components/InputText';
import { useDispatch, useSelector } from 'react-redux';
import AuthAction from '../../stores/auth/AuthAction';
import { selectRequesting } from '../../selectors/requesting/RequestingSelector';

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
      console.log('AHHHHHHHH');
      return;
    }
    if (!!email) {
      dispatch(AuthAction.requestForgotPassword(email));
      setIsReady(true);
    }
  };

  const validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Restablecer Contraseña</Text>
      <View style={styles.form}>
        {isReady ? (
          <Text>Revise sú correo electronico</Text>
        ) : (
          <>
            <InputText value={email} onChangeText={setEmail} placeholder="Email" name="email" />
            {error ? <Text style={styles.error}>Por favor llenar todos los campos</Text> : null}
            {errorEmail ? <Text style={styles.error}>Debe ser un correo valido</Text> : null}
            <Button label="Restablecer" onPress={handleSubmit} />
          </>
        )}
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
  error: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
});

export default ResetPasswordScreen;
