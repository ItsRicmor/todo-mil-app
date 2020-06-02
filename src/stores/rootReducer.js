import { combineReducers } from 'redux';
import RequestingReducer from './requesting/RequestingReducer';
import ErrorReducer from './error/ErrorReducer';
import ToastsReducer from './toasts/ToastsReducer';
import TodoReducer from './todos/TodoReducer';

export default function rootReducer() {
  const reducerMap = {
    error: ErrorReducer.reducer,
    requesting: RequestingReducer.reducer,
    todos: new TodoReducer().reducer,
    toasts: new ToastsReducer().reducer,
  };

  return new combineReducers(reducerMap);
}
