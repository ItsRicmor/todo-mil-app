import OrderEffect from './OrderEffect';
import ActionUtility from '../../utils/ActionUtility';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';

export default class OrderAction {
  static REQUEST_ORDER = 'OrderAction.REQUEST_ORDER';
  static REQUEST_ORDER_FINISHED = 'OrderAction.REQUEST_ORDER_FINISHED';

  static getOrders() {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(
        dispatch,
        OrderAction.REQUEST_ORDER,
        OrderEffect.requestOrders,
      );
    };
  }

  static REQUEST_ORDER_UPDATE = 'OrderAction.REQUEST_ORDER_UPDATE';
  static REQUEST_ORDER_UPDATE_FINISHED = 'OrderAction.REQUEST_ORDER_UPDATE_FINISHED';

  static updateOrder(order, callback) {
    return async (dispatch, getState) => {
      const response = await ActionUtility.createThunkEffect(
        dispatch,
        OrderAction.REQUEST_ORDER_UPDATE,
        OrderEffect.requestUpdateOrder,
        order,
      );
      if (response instanceof HttpErrorResponseModel) {
        callback(false);
      } else {
        callback(true);
      }
    };
  }
}
