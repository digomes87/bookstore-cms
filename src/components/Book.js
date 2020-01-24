import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id,
  title,
  category,
  handleBookRemove,
}) => (
  <div className="Book-container">
    <tr className="Book-list">
      <td className="category">{category}</td>
      <td className="title">{title}</td>
      <td className="author">{id}</td>
      <td><button onClick={() => handleBookRemove(id)} type="button" className="remove">Remove</button></td>
    </tr>
  </div>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleBookRemove: PropTypes.func.isRequired,
};

export default Book;
