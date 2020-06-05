import environment from 'environment';
// import HttpUtility from '../../utils/HttpUtility';
import EffectUtility from '../../utils/EffectUtility';
// import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
import AuthModel from '../../models/AuthModel';

import AuthService from '../../services/AuthService';

export default class AuthEffect {
  static requestLogin = async (username, password) => {
    const endpoint = environment.auth.login
      .replace(':username', username)
      .replace(':password', password);
    const response = await EffectUtility.postToModel(AuthModel, endpoint);
    if (response.token) {
      AuthService.setToken(response.token);
    }
    return response;
  };
}
