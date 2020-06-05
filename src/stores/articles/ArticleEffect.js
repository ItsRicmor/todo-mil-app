import environment from 'environment';
import EffectUtility from '../../utils/EffectUtility';
import { ArticleModel } from '../../models/ArticleModel';
import HttpResponseModel from '../../models/HttpErrorResponseModel';

export default class ArticleEffect {
  static requestArticles = async filter => {
    const endpoint = environment.api.articles.replace('/:id', `?filter=${filter}`);
    return await EffectUtility.getToModel(ArticleModel, endpoint);
  };
  static requestUpdateArticle = async article => {
    const endpoint = environment.api.articles.replace(':id', article.id);
    return await EffectUtility.putToModel(ArticleModel, endpoint, article);
  };
  static requestDeleteArticle = async id => {
    const endpoint = environment.api.articles.replace(':id', id);
    const response = await EffectUtility.deleteToModel(ArticleModel, endpoint);
    return response instanceof HttpResponseModel ? response : id;
  };
  static requestCreateArticle = async article => {
    const endpoint = environment.api.articles.replace(':id', '');
    return await EffectUtility.postToModel(ArticleModel, endpoint, article);
  };
}
