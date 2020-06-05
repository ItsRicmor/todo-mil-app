import MenuAction from './MenuAction';
import BaseReducer from '../../utils/BaseReducer';

export default class MenuReducer extends BaseReducer {
  initialState = [];

  [MenuAction.REQUEST_MENU_FINISHED](state, action) {
    return [...action.payload];
  }

  [MenuAction.REQUEST_MENU_UPDATE_FINISHED](state, action) {
    const menu = action.payload;
    return [menu, ...state.filter(model => model.id !== menu.id)];
  }
  [MenuAction.REQUEST_MENU_DELETE_FINISHED](state, action) {
    const id = action.payload;
    return [...state.filter(model => model.id !== id)];
  }
  [MenuAction.REQUEST_MENU_CREATE_FINISHED](state, action) {
    const menu = action.payload;
    return [menu, ...state];
  }
}
