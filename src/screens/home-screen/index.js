/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Content } from 'native-base';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import MenuAction from '../../stores/menus/MenuAction';
import ItemCard from './components/ItemCard';

const CrouselContainer = () => {
  const dispatch = useDispatch();
  const menus = useSelector(state => state.menus);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    dispatch(MenuAction.getMenus());
  }, [dispatch]);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'cyan', paddingTop: 50 }}>
      <Content>
        {menus.map((menu, i) => (
          <View key={i} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Carousel
              layout="default"
              data={menu.articles}
              sliderWidth={Dimensions.get('window').width - 10}
              itemWidth={Dimensions.get('window').width - 100}
              renderItem={ItemCard}
              onSnapToItem={index => setIndex(index)}
            />
          </View>
        ))}
      </Content>
      <View style={{ height: 100 }}></View>
    </ScrollView>
  );
};

export default CrouselContainer;
