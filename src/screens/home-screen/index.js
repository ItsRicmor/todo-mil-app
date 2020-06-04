import React, { Component } from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Card, CardItem, Text, Left, Body, Right, Button, Icon } from 'native-base';

export default class MyCarousel extends Component {
  state = {
    activeIndex: 0,
    carouselItems: [
      {
        title: 'Item 1',
        text: 'Text 1',
      },
      {
        title: 'Item 2',
        text: 'Text 2',
      },
      {
        title: 'Item 3',
        text: 'Text 3',
      },
      {
        title: 'Item 4',
        text: 'Text 4',
      },
      {
        title: 'Item 5',
        text: 'Text 5',
      },
    ],
  };

  _renderItem({ item, index }) {
    return (
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>{item.title} </Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={require('../../../assets/comida.png')}
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
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'cyan', paddingTop: 50 }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({ activeIndex: index })}
          />
        </View>
      </SafeAreaView>
    );
  }
}
