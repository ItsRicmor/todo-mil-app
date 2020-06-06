import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Footer, FooterTab } from 'native-base';

const FooterApp = () => {
  return (
    <Footer>
      <FooterTab style={{ backgroundColor: '#FFF', alignItems: 'center' }}>
        <Text style={styles.textLeft}>TODO A MIL</Text>
        <Text style={styles.textRight}>Contáctenos: 85243900</Text>
      </FooterTab>
    </Footer>
  );
};

const styles = StyleSheet.create({
  textLeft: {
    fontSize: 13,
    textAlign: 'center',
    color: 'black',
    paddingVertical: 4,
    marginTop: 2,
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20,
  },
  textRight: {
    fontSize: 13,
    textAlign: 'center',
    color: 'black',
    paddingVertical: 4,
    marginTop: 2,
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 20,
  },
});

export default FooterApp;
