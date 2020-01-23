import React from 'react';
import BooksList from './BooksList.js';
import BooksForm from './BooksForm.js';

function App(store) {
  return (
    <div className="App">
      <BooksList store={store} />
      <BooksForm />
    </div>
  );
}

export default App;
