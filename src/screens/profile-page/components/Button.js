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
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: 'cyan',
    fontWeight: 'bold',
    color: 'black',
  },
});
export default Button;
