import { combineReducers } from 'redux';
import RequestingReducer from './requesting/RequestingReducer';
import ErrorReducer from './error/ErrorReducer';
import ToastsReducer from './toasts/ToastsReducer';
import TodoReducer from './todos/TodoReducer';
import AuthReducer from './auth/AuthReducer';
import OrderReducer from './orders/OrderReducer';
import CategoryReducer from './categories/CategoryReducer';
import MenuReducer from './menus/MenuReducer';
import ArticleReducer from './articles/ArticleReducer';

export default function rootReducer() {
  const reducerMap = {
    error: ErrorReducer.reducer,
    requesting: RequestingReducer.reducer,
    todos: new TodoReducer().reducer,
    toasts: new ToastsReducer().reducer,
    auth: new AuthReducer().reducer,
    orders: new OrderReducer().reducer,
    categories: new CategoryReducer().reducer,
    menus: new MenuReducer().reducer,
    articles: new ArticleReducer().reducer,
  };

  return new combineReducers(reducerMap);
}
