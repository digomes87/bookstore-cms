import React from 'react';

const bookCategories = ['Action', 'Biography', 'Drama', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
  <div>
    <h2>Add Book</h2>
    <form>
      <input type="text" name="title" />
      <select>
        {bookCategories.map((p, i) => (
          <option key={i}>{p}</option> /* eslint-disable-line */
        ))}
      </select>
      <button type="submit">Save</button>
    </form>
  </div>
);

export default BooksForm;
