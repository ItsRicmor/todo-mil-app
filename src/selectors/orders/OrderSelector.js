import { createSelector } from 'reselect';
import StateEnum from '../../constants/StateEnum';

class OrderSelector {
  static selectOrderInProgress(orders = []) {
    return orders.filter(o => o.state === StateEnum.TODO);
  }
  static selectOrderDone(orders = []) {
    return orders.filter(o => o.state === StateEnum.DONE);
  }
  static selectOrderInDelivered(orders = []) {
    return orders.filter(o => o.state === StateEnum.DELIVERED);
  }
}

export const selectOrdersInProgress = createSelector(
  state => state.orders,
  OrderSelector.selectOrderInProgress,
);
export const selectOrdersDone = createSelector(
  state => state.orders,
  OrderSelector.selectOrderDone,
);
export const selectOrdersDelivered = createSelector(
  state => state.orders,
  OrderSelector.selectOrderInDelivered,
);
