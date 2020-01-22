import React from 'react';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '', /* eslint-disable-line */
      category: 'Action', /* eslint-disable-line */
    };
  }

  render() {
    const bookCategories = ['Action', 'Biography', 'Drama', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

    return (
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
  }
}

export default BooksForm;
