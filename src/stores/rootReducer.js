import { combineReducers } from 'redux';
import ArticleReducer from './articles/ArticleReducer';
import AuthReducer from './auth/AuthReducer';
import CategoryReducer from './categories/CategoryReducer';
import ErrorReducer from './error/ErrorReducer';
import MenuReducer from './menus/MenuReducer';
import OrderReducer from './orders/OrderReducer';
import RequestingReducer from './requesting/RequestingReducer';
import ToastsReducer from './toasts/ToastsReducer';
import TodoReducer from './todos/TodoReducer';

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
