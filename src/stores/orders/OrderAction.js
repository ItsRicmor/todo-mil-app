import OrderEffect from './OrderEffect';
import ActionUtility from '../../utils/ActionUtility';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
import ToastsAction from '../toasts/ToastsAction';
import ToastStatusEnum from '../../constants/ToastStatusEnum';

export default class OrderAction {
  static REQUEST_ORDER = 'OrderAction.REQUEST_ORDER';
  static REQUEST_ORDER_FINISHED = 'OrderAction.REQUEST_ORDER_FINISHED';

  static getOrders(id) {
    return async (dispatch, getState) => {
      const response = await ActionUtility.createThunkEffect(
        dispatch,
        OrderAction.REQUEST_ORDER,
        OrderEffect.requestOrders,
        id,
      );
      if (!(response instanceof HttpErrorResponseModel)) {
        dispatch(ToastsAction.add('Se ha generado un pedido', ToastStatusEnum.Success));
      }
    };
  }

  static REQUEST_ORDER_UPDATE = 'OrderAction.REQUEST_ORDER_UPDATE';
  static REQUEST_ORDER_UPDATE_FINISHED = 'OrderAction.REQUEST_ORDER_UPDATE_FINISHED';

  static updateOrder(order) {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(
        dispatch,
        OrderAction.REQUEST_ORDER_UPDATE,
        OrderEffect.requestUpdateOrder,
        order,
      );
    };
  }
  static REQUEST_ORDER_CREATE = 'OrderAction.REQUEST_ORDER_CREATE';
  static REQUEST_ORDER_CREATE_FINISHED = 'OrderAction.REQUEST_ORDER_CREATE_FINISHED';

  static createOrder(order, callback) {
    return async (dispatch, getState) => {
      const response = await ActionUtility.createThunkEffect(
        dispatch,
        OrderAction.REQUEST_ORDER_CREATE,
        OrderEffect.requestCreateOrder,
        order,
      );
      if (!(response instanceof HttpErrorResponseModel)) {
        callback();
      }
    };
  }
}
