import ArticleEffect from './ArticleEffect';
import ActionUtility from '../../utils/ActionUtility';
import RouteEnum from '../../constants/RouteEnum';

export default class ArticleAction {
  static REQUEST_ARTICLES = 'ArticleAction.REQUEST_ARTICLES';
  static REQUEST_ARTICLES_FINISHED = 'ArticleAction.REQUEST_ARTICLES_FINISHED';

  static getArticles(filter = 'all') {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(
        dispatch,
        ArticleAction.REQUEST_ARTICLES,
        ArticleEffect.requestArticles,
        filter,
      );
    };
  }
  static REQUEST_ARTICLE_UPDATE = 'ArticleAction.REQUEST_ARTICLE_UPDATE';
  static REQUEST_ARTICLE_UPDATE_FINISHED = 'ArticleAction.REQUEST_ARTICLE_UPDATE_FINISHED';
  static updateArticle(article) {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(
        dispatch,
        ArticleAction.REQUEST_ARTICLE_UPDATE,
        ArticleEffect.requestUpdateArticle,
        article,
      );
    };
  }

  static REQUEST_ARTICLE_DELETE = 'ArticleAction.REQUEST_ARTICLE_DELETE';
  static REQUEST_ARTICLE_DELETE_FINISHED = 'ArticleAction.REQUEST_ARTICLE_DELETE_FINISHED';

  static deletArticle(id) {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(
        dispatch,
        ArticleAction.REQUEST_ARTICLE_DELETE,
        ArticleEffect.requestDeleteArticle,
        id,
      );
    };
  }
  static REQUEST_ARTICLE_CREATE = 'ArticleAction.REQUEST_ARTICLE_CREATE';
  static REQUEST_ARTICLE_CREATE_FINISHED = 'ArticleAction.REQUEST_ARTICLE_CREATE_FINISHED';

  static createArticle(article, history) {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(
        dispatch,
        ArticleAction.REQUEST_ARTICLE_CREATE,
        ArticleEffect.requestCreateArticle,
        article,
      );
      history.push(RouteEnum.Articles);
    };
  }
}
