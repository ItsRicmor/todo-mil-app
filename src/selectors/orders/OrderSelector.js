import { createSelector } from 'reselect';
import StateEnum from '../../constants/StateEnum';

class OrderSelector {
  static selectOrderInProgress(orders = []) {
    return orders.filter(o => o.state === StateEnum.DOING);
  }
  static selectOrderDone(orders = []) {
    return orders.filter(o => o.state === StateEnum.DONE);
  }
  static selectOrderTodo(orders = []) {
    return orders.filter(o => o.state === StateEnum.TODO);
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
export const selectOrdersTodo = createSelector(
  state => state.orders,
  OrderSelector.selectOrderTodo,
);
