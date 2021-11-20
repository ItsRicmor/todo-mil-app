/* eslint-disable react/jsx-key */
import { useNavigation } from '@react-navigation/native';
import { Heading } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useDispatch, useSelector } from 'react-redux';
import RouteEnum from '../../constants/RouteEnum';
import StateEnum from '../../constants/StateEnum';
import AuthService from '../../services/AuthService';
import MenuAction from '../../stores/menus/MenuAction';
import OrderAction from '../../stores/orders/OrderAction';
import Toasts from '../components/Toasts';
import ItemCard from './components/ItemCard';

const CrouselContainer = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const menus = useSelector(state => state.menus);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [article, setArticle] = useState({});
  const [menuSelected, setMenuSelected] = useState({});

  const onOpenCard = (item, menu) => {
    setArticle(item);
    setMenuSelected(menu);
    setVisible(true);
  };

  const onAcceptCard = async () => {
    setVisible(false);
    const { token, ...rest } = (await AuthService.getProfile()).user_data;
    const { client } = rest;
    const order = { article, client, foodTime: menuSelected.foodTime, state: StateEnum.TODO };
    console.log('ORDER', order);
    dispatch(OrderAction.createOrder(order, () => navigation.navigate(RouteEnum.Records)));
  };

  const onCloseCard = () => {
    setArticle({});
    setVisible(false);
  };
  useEffect(() => {
    dispatch(MenuAction.getMenus());
  }, [dispatch]);
  return (
    <View style={{ flex: 1, height: '100%' }}>
      <ScrollView style={{ flex: 1, paddingTop: 0, paddingBottom: 20, height: '100%' }}>
        {menus.map((menu, i) => (
          <View key={i} style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <Heading style={styles.title}>Menu: {menu.name}</Heading>
            <Carousel
              layout="default"
              data={menu.articles}
              sliderWidth={Dimensions.get('window').width - 10}
              itemWidth={Dimensions.get('window').width - 100}
              layoutCardOffset={18}
              renderItem={({ item }) => (
                <ItemCard
                  item={item}
                  menu={menu}
                  onOpen={onOpenCard}
                  onClose={onCloseCard}
                  onAccept={onAcceptCard}
                  visible={visible}
                />
              )}
              onSnapToItem={index => setIndex(index)}
            />
          </View>
        ))}
        <View style={{ height: 100 }}></View>
      </ScrollView>
      <Toasts />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
});
export default CrouselContainer;
