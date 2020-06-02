import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import reduxFreeze from 'redux-freeze';
import { environment } from '../environments';
import rootReducer from './rootReducer';
import errorToastMiddleware from '../middlewares/errorToastMiddleware';

export default function rootStore(initialState) {
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
}
