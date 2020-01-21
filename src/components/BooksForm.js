import React from 'react';

const bookCategories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

const BooksForm = () => {(
  <div>
    <h2>BookList</h2>
    <form>
      <input type="text" name="title">
        {bookCategories.map((p, i) => (
          <select key={i}>{p}</select>
        ))}
			</input>
      <button type="submit">Save</button>
    </form>
  </div>
)};

export default BooksForm;
