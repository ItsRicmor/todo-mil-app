import AsyncStorage from '@react-native-async-storage/async-storage';
import decode from 'jwt-decode';

export default class AuthService {
  static loggedIn = async () => {
    const token = await this.getToken();
    return !!token && !this.isTokenExpired(token);
  };

  static isTokenExpired = token => {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired. N
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  };

  static setToken = async idToken => {
    try {
      await AsyncStorage.setItem('id_token', idToken);
    } catch (error) {
      console.log(error);
    }
  };

  static getToken = async () => {
    try {
      return await AsyncStorage.getItem('id_token');
    } catch (error) {
      console.log(error);
    }
  };

  static logout = async () => {
    try {
      await AsyncStorage.removeItem('id_token');
    } catch (error) {
      console.log(error);
    }
  };

  static getProfile = async () => decode(await this.getToken());

  static getUserRoles = async () => {
    const { auth } = await this.getProfile();
    return auth;
  };

  static isAdmin = async () => {
    if (this.loggedIn()) {
      const auth = await this.getUserRoles();
      let authorities = [];
      auth.forEach(({ authority }) => {
        authorities = [...authorities, authority];
      });
      for (const authority of authorities) {
        if (authority === 'ROLE_ADMIN') {
          return true;
        }
      }
      return false;
    }
  };

  static _checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      return response.json().then(json => {
        const error = new Error(json.message || response.statusText);
        error.response = response;
        throw error;
      });
    }
  };
}
