import React from 'react';
import Book from './Book';

const BookList = () => (
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {store.map(e => (
          <Book id={e.id} title={e.title} category={e.category} key={e.id} />
        ))}
      </tbody>
    </table>
  </div>
);

export default BookList;
