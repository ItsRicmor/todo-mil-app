import environment from 'environment';
import EffectUtility from '../../utils/EffectUtility';
import MenuModel from '../../models/MenuModel';
import HttpResponseModel from '../../models/HttpErrorResponseModel';

export default class MenuEffect {
  static requestMenus = async () => {
    const endpoint = environment.api.menus.replace(':menuId', '');
    return await EffectUtility.getToModel(MenuModel, endpoint);
  };
  static requestUpdateMenu = async menu => {
    const endpoint = environment.api.menus.replace(':menuId', menu.id);
    return await EffectUtility.putToModel(MenuModel, endpoint, menu);
  };
  static requestDeleteMenu = async id => {
    const endpoint = environment.api.menus.replace(':menuId', id);
    const response = await EffectUtility.deleteToModel(MenuModel, endpoint);
    return response instanceof HttpResponseModel ? response : id;
  };
  static requestCreateMenu = async menu => {
    const endpoint = environment.api.menus.replace(':menuId', '');
    return await EffectUtility.postToModel(MenuModel, endpoint, menu);
  };
}
