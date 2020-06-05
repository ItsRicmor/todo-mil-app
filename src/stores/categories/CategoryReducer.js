import CategoryAction from './CategoryAction';
import BaseReducer from '../../utils/BaseReducer';

export default class CategoryReducer extends BaseReducer {
  initialState = [];

  [CategoryAction.REQUEST_CATEGORY_FINISHED](state, action) {
    return [...action.payload];
  }

  [CategoryAction.REQUEST_CATEGORY_UPDATE_FINISHED](state, action) {
    const category = action.payload;
    return [category, ...state.filter(model => model.id !== category.id)];
  }

  [CategoryAction.REQUEST_CATEGORY_DELETE_FINISHED](state, action) {
    const id = action.payload;
    return [...state.filter(model => model.id !== id)];
  }
  [CategoryAction.REQUEST_CATEGORY_CREATE_FINISHED](state, action) {
    const category = action.payload;
    return [category, ...state];
  }
}
