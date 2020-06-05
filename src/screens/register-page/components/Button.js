import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ label }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0275d8',
    marginBottom: 12,
    marginTop: 50,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.7)',
    backgroundColor: 'cyan',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    height: 20,
    fontWeight: 'bold',
  },
});

export default Button;
