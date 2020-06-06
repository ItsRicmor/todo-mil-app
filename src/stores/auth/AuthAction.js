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
        await AuthService.logout();
      }
    };
  }

  static REQUEST_AUTH_REGISTER = 'AuthAction.REQUEST_AUTH_REGISTER';
  static REQUEST_AUTH_REGISTER_FINISHED = 'AuthAction.REQUEST_AUTH_REGISTER_FINISHED';

  static requestRegister(user) {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(
        dispatch,
        AuthAction.REQUEST_AUTH_REGISTER,
        AuthEffect.requestRegister,
        user,
      );
      if (await AuthService.loggedIn()) {
        const { token, ...rest } = (await AuthService.getProfile()).user_data;
        dispatch(this.changeAuth({ authenticated: true, ...rest }));
      } else {
        dispatch(this.changeAuth({ authenticated: false }));
        await AuthService.logout();
      }
    };
  }

  static REQUEST_AUTH_FORGOT_PASSWORD = 'AuthAction.REQUEST_AUTH_FORGOT_PASSWORD';
  static REQUEST_AUTH_FORGOT_PASSWORD_FINISHED = 'AuthAction.REQUEST_AUTH_FORGOT_PASSWORD_FINISHED';

  static requestForgotPassword(email) {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(
        dispatch,
        AuthAction.REQUEST_AUTH_FORGOT_PASSWORD,
        AuthEffect.requestForgotPassword,
        email,
      );
    };
  }

  static AUTH_AUTHENTICATED = 'AuthAction.AUTH_AUTHENTICATED';

  static changeAuth(auth) {
    return ActionUtility.createAction(AuthAction.AUTH_AUTHENTICATED, { ...auth });
  }
  static AUTH_LOGOUT = 'AuthAction.AUTH_LOGOUT';

  static logout() {
    return ActionUtility.createAction(AuthAction.AUTH_LOGOUT, {});
  }
}
