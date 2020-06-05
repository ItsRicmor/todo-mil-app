import environment from 'environment';
import EffectUtility from '../../utils/EffectUtility';
import CategoryModel from '../../models/CategoryModel';
import HttpResponseModel from '../../models/HttpErrorResponseModel';

export default class CategoryEffect {
  static requestCategories = async () => {
    const endpoint = environment.api.categories.replace(':categoryId', '');
    return await EffectUtility.getToModel(CategoryModel, endpoint);
  };
  static requestUpdateCategory = async category => {
    const endpoint = environment.api.categories.replace(':categoryId', category.id);
    return await EffectUtility.putToModel(CategoryModel, endpoint, category);
  };
  static requestDeleteCategory = async id => {
    const endpoint = environment.api.categories.replace(':categoryId', id);
    const response = await EffectUtility.deleteToModel(CategoryModel, endpoint);
    return response instanceof HttpResponseModel ? response : id;
  };
  static requestCreateCategory = async category => {
    const endpoint = environment.api.categories.replace(':categoryId', '');
    return await EffectUtility.postToModel(CategoryModel, endpoint, category);
  };
}
