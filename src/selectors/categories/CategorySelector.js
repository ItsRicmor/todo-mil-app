import { createSelector } from 'reselect';

class CategorySelector {
  static selectCategories(categories) {
    return categories;
  }
}

export const selectCategories = createSelector(
  state => state.categories,
  CategorySelector.selectCategories,
);
