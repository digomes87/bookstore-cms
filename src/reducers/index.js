const getID = () => Math.floor(Math.random() * 1000);

const initialState = {
  books: [
    {
      id: getID(),
      title: 'Wuthering Heights',
      category: 'Drama',
    },
    {
      id: getID(),
      title: 'Dracula',
      category: 'Horror',
    },
    {
      id: getID(),
      title: 'The Universe in a Nutshell',
      category: 'Learning',
    },
  ],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return Object.assign({}, state, {
        id: getID(),
        title: action.title,
        category: action.category,
      });

    case 'REMOVE_BOOK':
      return state.filter(j => j.id !== action.books.id);

    default:
      return state;
  }
};

export default reducers;
