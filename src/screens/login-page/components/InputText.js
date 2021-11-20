import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const InputText = props => {
  return <TextInput {...props} style={style.textInput} autoFocus={true} />;
};

const style = StyleSheet.create({
  textInput: {
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 7,
    height: 40,
    borderColor: '#0275d8',
    borderWidth: 1.5,
    width: '100%',
  },
});

export default InputText;
