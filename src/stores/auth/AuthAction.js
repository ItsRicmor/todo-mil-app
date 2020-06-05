import AuthEffect from './AuthEffect';
import ActionUtility from '../../utils/ActionUtility';
import AuthService from '../../services/AuthService';

export default class AuthAction {
  static REQUEST_AUTH = 'AuthAction.REQUEST_AUTH';
  static REQUEST_AUTH_FINISHED = 'AuthAction.REQUEST_AUTH_FINISHED';

  static requestLogin(username, password) {
    return async (dispatch, getState) => {
      if (!getState().auth.authenticated) {
        await ActionUtility.createThunkEffect(
          dispatch,
          AuthAction.REQUEST_AUTH,
          AuthEffect.requestLogin,
          username,
          password,
        );
        if (AuthService.loggedIn()) {
          const { token, ...rest } = AuthService.getProfile().user_data;
          dispatch(this.changeAuth({ authenticated: true, ...rest }));
        } else {
          dispatch(this.changeAuth({ authenticated: false }));
          AuthService.logout();
        }
      }
    };
  }

  static AUTH_AUTHENTICATED = 'AuthAction.AUTH_AUTHENTICATED';

  static changeAuth(auth) {
    return ActionUtility.createAction(AuthAction.AUTH_AUTHENTICATED, { ...auth });
  }
}
