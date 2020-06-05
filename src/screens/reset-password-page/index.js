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

  const handleSubmit = async () => {
    if (!!email) {
      dispatch(AuthAction.requestForgotPassword(email));
      setIsReady(true);
    }
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
});

export default ResetPasswordScreen;
