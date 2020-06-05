import ArticleAction from './ArticleAction';
import BaseReducer from '../../utils/BaseReducer';

export default class ArticleReducer extends BaseReducer {
  initialState = [];

  [ArticleAction.REQUEST_ARTICLES_FINISHED](state, action) {
    return [...action.payload];
  }
  [ArticleAction.REQUEST_ARTICLE_DELETE_FINISHED](state, action) {
    const id = action.payload;
    return [...state.filter(model => model.id !== id)];
  }
  [ArticleAction.REQUEST_ARTICLE_CREATE_FINISHED](state, action) {
    const article = action.payload;
    return [article, ...state];
  }
}
