import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Delivered = () => {
  state = {
    names: [
      {
        id: 1,
        name: 'gallo pinto',
        descripcion: 'con huevos',
        precio: '1500',
      },
      {
        id: 2,
        name: 'bistec',
        descripcion: 'con carne asada',
        precio: '2500',
      },

      {
        id: 5,
        name: 'galletas',
        descripcion: 'con chispas de chocolate',
        precio: '1000',
      },

      {
        id: 7,
        name: 'tostadas',
        descripcion: 'con tortillas caceras',
        precio: '2000',
      },
    ],
  };
  alertItemName = item => {
    alert(item.name);
  };
  return (
    <ScrollView>
      <View>
        {this.state.names.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => this.alertItemName(item)}
          >
            <Text style={[styles.text, styles.title]}>{item.name}</Text>
            <Text style={styles.text}>{item.descripcion}</Text>
            <Text style={styles.text}>{item.precio}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Delivered;

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
