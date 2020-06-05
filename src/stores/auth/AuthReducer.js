import AuthAction from './AuthAction';
import BaseReducer from '../../utils/BaseReducer';

export default class AuthReducer extends BaseReducer {
  initialState = { authenticated: false };

  [AuthAction.REQUEST_AUTH_FINISHED](state, action) {
    return { ...state, ...action.payload };
  }

  [AuthAction.AUTH_AUTHENTICATED](state, action) {
    return { ...action.payload };
  }
}
