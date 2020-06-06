/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Content } from 'native-base';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import MenuAction from '../../stores/menus/MenuAction';
import OrderAction from '../../stores/orders/OrderAction';
import ItemCard from './components/ItemCard';
import AuthService from '../../services/AuthService';
import StateEnum from '../../constants/StateEnum';
import { useNavigation } from '@react-navigation/native';
import RouteEnum from '../../constants/RouteEnum';
import Footer from './components/Footer';
import Toasts from '../components/Toasts';

const CrouselContainer = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const menus = useSelector((state) => state.menus);
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
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: 'cyan', paddingTop: 50 }}>
        <Content>
          {menus.map((menu, i) => (
            <View key={i} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={styles.tittle}>{menu.name}</Text>
              <Carousel
                layout="default"
                data={menu.articles}
                sliderWidth={Dimensions.get('window').width - 10}
                itemWidth={Dimensions.get('window').width - 100}
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
                onSnapToItem={(index) => setIndex(index)}
              />
            </View>
          ))}
        </Content>
        <View style={{ height: 100 }}></View>
      </ScrollView>
      <Footer />
      <Toasts />
    </View>
  );
};

const styles = StyleSheet.create({
  tittle: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 50,
    fontWeight: 'bold',
  },
});
export default CrouselContainer;
