import React from 'react';
import Book from './Book';

const BookList = (books) => ( 
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
        {books.map(e =>{
          <Book id={e.id} title={e.title} category={e.category} />
        })}
      </tbody>
    </table>
  </div>
);

export default BookList;
