import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Profile = () => {
  return <Image style={styles.avatar} source={require('../../../../assets/usuario.png')} />;
};
const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    marginTop: 100,
  },
});
export default Profile;
