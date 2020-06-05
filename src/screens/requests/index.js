import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

class List extends Component {
  state = {
    names: [
      {
        id: 1,
        name: 'gallo pinto',
        precio: '1500',
        descripcion: 'con huevos',
        estado: 'recibido',
        fechaCompra: '',
      },
      {
        id: 2,
        name: 'bistec',
        estado: 'recibido',
        descripcion: 'con carne asada',
        precio: '2500',
      },
      {
        id: 3,
        name: 'cena',
        estado: 'en progreso',
        descripcion: 'a la barbacoa',
        precio: '3000',
      },
      {
        id: 4,
        name: 'helado',
        estado: 'en progreso',
        descripcion: 'con chispas de chocolate',
        precio: '1000',
      },
      {
        id: 5,
        name: 'galletas',
        estado: 'recibido',
        descripcion: 'con chispas de chocolate',
        precio: '1000',
      },
      {
        id: 6,
        name: 'Jugo verde',
        estado: 'terminado',
        descripcion: 'con brocoli',
        precio: '1500',
      },
      {
        id: 7,
        name: 'tostadas',
        estado: 'recibido',
        descripcion: 'con tortillas caceras',
        precio: '2000',
      },
    ],
  };
  alertItemName = item => {
    alert(item.name);
  };
  render() {
    return (
      <ScrollView>
        <View>
          {this.state.names.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={styles.container}
              onPress={() => this.alertItemName(item)}
            >
              <Text style={[styles.text, styles.title]}>{item.name}</Text>
              <Text style={styles.text}>{item.descripcion}</Text>
              <Text style={styles.text}>{item.precio}</Text>
              <Text style={styles.text}>{item.estado}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}
export default List;

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
