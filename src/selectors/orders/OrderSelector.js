import { createSelector } from 'reselect';

export class OrderSelector {
  static selectOrder(orders) {
    return orders;
  }
}

export const selectOrders = createSelector(state => state.orders, OrderSelector.selectOrder);
