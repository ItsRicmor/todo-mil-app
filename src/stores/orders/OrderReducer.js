import OrderAction from './OrderAction';
import BaseReducer from '../../utils/BaseReducer';

export default class OrderReducer extends BaseReducer {
  initialState = [];

  [OrderAction.REQUEST_ORDER_FINISHED](state, action) {
    return [...action.payload];
  }

  [OrderAction.REQUEST_ORDER_UPDATE_FINISHED](state, action) {
    const order = action.payload;

    return [order, ...state.filter(model => model.id !== order.id)];
  }
}
