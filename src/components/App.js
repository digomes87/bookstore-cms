import React from 'react';
import BooksList from '../container/BooksList';
import BooksForm from '../container/BooksForm';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="logo">Book Store</div>
        <div className="span">Books</div>
        <div className="span">Categories</div>
      </div>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
