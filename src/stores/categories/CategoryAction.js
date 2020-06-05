import CategoryEffect from './CategoryEffect';
import ActionUtility from '../../utils/ActionUtility';
import RouteEnum from 'constants/RouteEnum';

export default class CategoryAction {
  static REQUEST_CATEGORY = 'CategoryAction.REQUEST_CATEGORY';
  static REQUEST_CATEGORY_FINISHED = 'CategoryAction.REQUEST_CATEGORY_FINISHED';

  static getCategories() {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(
        dispatch,
        CategoryAction.REQUEST_CATEGORY,
        CategoryEffect.requestCategories,
      );
    };
  }
  static REQUEST_CATEGORY_UPDATE = 'CategoryAction.REQUEST_CATEGORY_UPDATE';
  static REQUEST_CATEGORY_UPDATE_FINISHED = 'CategoryAction.REQUEST_CATEGORY_UPDATE_FINISHED';

  static updateCategory(category) {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(
        dispatch,
        CategoryAction.REQUEST_CATEGORY_UPDATE,
        CategoryEffect.requestUpdateCategory,
        category,
      );
    };
  }
  static REQUEST_CATEGORY_DELETE = 'CategoryAction.REQUEST_CATEGORY_DELETE';
  static REQUEST_CATEGORY_DELETE_FINISHED = 'CategoryAction.REQUEST_CATEGORY_DELETE_FINISHED';

  static deleteCategory(id) {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(
        dispatch,
        CategoryAction.REQUEST_CATEGORY_DELETE,
        CategoryEffect.requestDeleteCategory,
        id,
      );
    };
  }

  static REQUEST_CATEGORY_CREATE = 'CategoryAction.REQUEST_CATEGORY_CREATE';
  static REQUEST_CATEGORY_CREATE_FINISHED = 'CategoryAction.REQUEST_CATEGORY_CREATE_FINISHED';

  static createCategory(category, history) {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(
        dispatch,
        CategoryAction.REQUEST_CATEGORY_CREATE,
        CategoryEffect.requestCreateCategory,
        category,
      );
      history.push(RouteEnum.Categories);
    };
  }
}
