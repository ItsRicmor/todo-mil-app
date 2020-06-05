import { createSelector } from 'reselect';

export class ArticleSelector {
  static selectArticles(articles) {
    return articles;
  }
}

export const selectArticles = createSelector(
  state => state.articles,
  ArticleSelector.selectArticles,
);
