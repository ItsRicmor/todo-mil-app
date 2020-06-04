import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

const InputText = props => {
  return <TextInput {...props} style={style.textInput} />;
};

const style = StyleSheet.create({
  textInput: {
    height: 50,
    borderColor: '#afa19c',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
  },
});

export default InputText;
