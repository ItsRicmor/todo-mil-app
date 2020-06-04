import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

class List extends Component {
  state = {
    names: [
      {
        name: 'gallo pinto',
        precio: '1500',
        descripcio: 'delicioso',
      },
      {
        id: 1,
        name: 'Susan',
      },
      {
        id: 2,
        name: 'Robert',
      },
      {
        id: 3,
        name: 'Mary',
      },
      {
        id: 4,
        name: 'Mary',
      },
      {
        id: 5,
        name: 'Mary',
      },
      {
        id: 6,
        name: 'Mary',
      },
      {
        id: 7,
        name: 'Mary',
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
              <Text style={styles.text}>{item.name}</Text>
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
    padding: 50,
    marginTop: 10,
    backgroundColor: 'cyan',
    alignItems: 'center',
    marginRight: 50,
    marginLeft: 50,
  },
  text: {
    color: '#4f603c',
    fontWeight: 'bold',
  },
});
