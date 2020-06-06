/* eslint-disable react/prop-types */
import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Text, Left, Body, Right, Button, Icon } from 'native-base';

const ItemCard = ({ item }) => {
  return (
    <Card>
      <CardItem>
        <Left>
          <Body>
            <Text>{item.name} </Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image
          source={{ uri: item.image, method: 'POST' }}
          style={{ flex: 1, resizeMode: 'contain', width: null, height: 200 }}
        />
      </CardItem>
      <CardItem>
        <Right>
          <Button iconRight light>
            <Text>Pedir Plato</Text>
            <Icon name="arrow-forward" />
          </Button>
        </Right>
      </CardItem>
    </Card>
  );
};

export default ItemCard;
