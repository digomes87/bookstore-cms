export const createBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

export const removeBook = book => ({
  type: 'REMOVE_BOOK',
  book,
});

export const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
};
