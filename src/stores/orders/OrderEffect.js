import environment from 'environment';
import EffectUtility from '../../utils/EffectUtility';
import OrderModel from '../../models/OrderModel';

export default class TodoEffect {
  static requestOrders = async id => {
    const endpoint = environment.api.orders.replace(':orderId', 'idClient?id=' + id);
    return await EffectUtility.getToModel(OrderModel, endpoint);
  };
  static requestUpdateOrder = async order => {
    const endpoint = environment.api.orders.replace(':orderId', order.id);
    return await EffectUtility.putToModel(OrderModel, endpoint, order);
  };
  static requestCreateOrder = async order => {
    const endpoint = environment.api.orders.replace(':orderId', '');
    return await EffectUtility.postToModel(OrderModel, endpoint, order);
  };
}
