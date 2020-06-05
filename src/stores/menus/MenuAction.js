import MenuEffect from './MenuEffect';
import ActionUtility from '../../utils/ActionUtility';

export default class MenuAction {
  static REQUEST_MENU = 'MenuAction.REQUEST_MENU';
  static REQUEST_MENU_FINISHED = 'MenuAction.REQUEST_MENU_FINISHED';

  static getMenus() {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(
        dispatch,
        MenuAction.REQUEST_MENU,
        MenuEffect.requestMenus,
      );
    };
  }

  static REQUEST_MENU_UPDATE = 'MenuAction.REQUEST_MENU_UPDATE';
  static REQUEST_MENU_UPDATE_FINISHED = 'MenuAction.REQUEST_MENU_UPDATE_FINISHED';

  static updateMenu(menu) {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(
        dispatch,
        MenuAction.REQUEST_MENU_UPDATE,
        MenuEffect.requestUpdateMenu,
        menu,
      );
    };
  }
  static REQUEST_MENU_DELETE = 'MenuAction.REQUEST_MENU_DELETE';
  static REQUEST_MENU_DELETE_FINISHED = 'MenuAction.REQUEST_MENU_DELETE_FINISHED';

  static deleteMenu(id) {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(
        dispatch,
        MenuAction.REQUEST_MENU_DELETE,
        MenuEffect.requestDeleteMenu,
        id,
      );
    };
  }

  static REQUEST_MENU_CREATE = 'MenuAction.REQUEST_MENU_CREATE';
  static REQUEST_MENU_CREATE_FINISHED = 'MenuAction.REQUEST_MENU_CREATE_FINISHED';

  static createMenu(menu) {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(
        dispatch,
        MenuAction.REQUEST_MENU_CREATE,
        MenuEffect.requestCreateMenu,
        menu,
      );
    };
  }
}
