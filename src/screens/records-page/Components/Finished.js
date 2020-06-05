import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Finished = () => {
  const state = {
    names: [
      {
        id: 6,
        name: 'Jugo verde',
        description: 'con brocoli',
        price: '1500',
      },
      {
        id: 7,
        name: 'tostadas',
        description: 'con tortillas caceras',
        price: '2000',
      },
    ],
  };
  alertItemName = item => {
    alert(item.name);
  };
  return (
    <ScrollView>
      <View>
        {state.names.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => alertItemName(item)}
          >
            <Text style={[styles.text, styles.title]}>{item.name}</Text>
            <Text style={styles.text}>{item.description}</Text>
            <Text style={styles.text}>{item.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
export default Finished;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 10,
    backgroundColor: 'cyan',
    alignItems: 'center',
    marginRight: 50,
    marginLeft: 50,
    textShadowRadius: 20,
    borderRadius: 45,
    borderTopColor: 'black',
    borderWidth: 1,
  },
  text: {
    color: '#4f603c',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    textTransform: 'uppercase',
    borderColor: '#afa19c',
  },
});
