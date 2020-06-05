import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const InputText = props => {
  return <TextInput {...props} style={style.textInput} />;
};

const style = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: '#afa19c',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
    fontSize: 20,
  },
});

export default InputText;
