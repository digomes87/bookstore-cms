import React from 'react';
import BooksList from '../container/BooksList';
import BooksForm from '../container/BooksForm';
import '../styles/App.js';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
