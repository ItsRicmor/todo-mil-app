import AuthEffect from './AuthEffect';
import ActionUtility from '../../utils/ActionUtility';
import AuthService from '../../services/AuthService';

export default class AuthAction {
  static REQUEST_AUTH = 'AuthAction.REQUEST_AUTH';
  static REQUEST_AUTH_FINISHED = 'AuthAction.REQUEST_AUTH_FINISHED';

  static requestLogin(username, password) {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(
        dispatch,
        AuthAction.REQUEST_AUTH,
        AuthEffect.requestLogin,
        username,
        password,
      );
      if (await AuthService.loggedIn()) {
        const { token, ...rest } = (await AuthService.getProfile()).user_data;
        dispatch(this.changeAuth({ authenticated: true, ...rest }));
      } else {
        dispatch(this.changeAuth({ authenticated: false }));
        AuthService.logout();
      }
    };
  }

  static AUTH_AUTHENTICATED = 'AuthAction.AUTH_AUTHENTICATED';

  static changeAuth(auth) {
    return ActionUtility.createAction(AuthAction.AUTH_AUTHENTICATED, { ...auth });
  }
}
