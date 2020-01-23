import React from 'react';
import BooksList from '../container/BooksList';
import BooksForm from '../container/BooksForm';

function App(store) {
  return (
    <div className="App">
      <BooksList store={store} />
      <BooksForm />
    </div>
  );
}

export default App;
