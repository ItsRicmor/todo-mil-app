/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ label, ...props }) => {
  return (
    <TouchableOpacity {...props} style={styles.buttonContainer}>
      <Text style={styles.labelButton}>{label}</Text>
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
    backgroundColor: '#2887DA',
  },
  labelButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Button;
