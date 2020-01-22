const getID = () => Math.floor(Math.random() * 1000);

let initialState = [
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
];

const reducers = (state = initialState, action) => {
  const id = getID();
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        {
          id: id,
          title: action.title,
          category: action.category,
        }
      ]

    case 'REMOVE_BOOK':
      return state.filter(j => j.id !== action.books.id);

    default:
      return state;
  }
};

export default reducers;
