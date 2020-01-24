import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id,
  title,
  category,
  handleBookRemove,
}) => (
  <div className="panel">
    <tr className="container">
      <td className="category">{category}</td>
      <td className="id">{id}</td>
      <td className="title">{title}</td>
      <td><button onClick={() => handleBookRemove(id)} type="button">X</button></td>
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
