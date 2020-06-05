import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Profile = () => {
  return <Image style={styles.avatar} source={require('../../../../assets/usuario.png')} />;
};
const styles = StyleSheet.create({
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
});
export default Profile;
