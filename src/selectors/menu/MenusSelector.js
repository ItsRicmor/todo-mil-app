import { createSelector } from 'reselect';

export class MenusSelector {
  static selectMenus(menus) {
    return menus;
  }
}

export const selectMenus = createSelector(state => state.menus, MenusSelector.selectMenus);
