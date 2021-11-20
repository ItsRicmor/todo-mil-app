import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import reduxFreeze from 'redux-freeze';
import thunk from 'redux-thunk';
import { environment } from '../environments';
import errorToastMiddleware from '../middlewares/errorToastMiddleware';
import rootReducer from './rootReducer';

export const rootStore = initialState => {
  const middleware = [
    environment.isDevelopment ? reduxFreeze : null,
    thunk,
    errorToastMiddleware(),
  ].filter(Boolean);

  const store = createStore(
    rootReducer(),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  return store;
};
