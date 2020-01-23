const getID = () => Math.floor(Math.random() * 1000);
const initialState = [
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

const books = (state = initialState, action) => {
  const id = getID();
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, {
        id,
        title: action.book.title,
        category: action.book.category,
      }];

    case 'REMOVE_BOOK':
      return state.filter(j => j.id !== action.id);

    default:
      return state;
  }
};

export default books;
