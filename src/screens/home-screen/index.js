import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { environment } from '../../environments';
import { useSelector } from 'react-redux';

const Home = () => {
  const state = useSelector(state => state);
  console.log({ environment, state });
  return (
    <View style={styles.container}>
      <Text>Open up Home.js to start working on your Home!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
