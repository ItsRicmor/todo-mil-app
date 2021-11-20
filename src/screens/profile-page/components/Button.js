/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ label, ...props }) => {
  return (
    <TouchableOpacity {...props} style={styles.buttonContainer}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'cyan',
    fontWeight: 'bold',
    color: 'black',
  },
});
export default Button;
