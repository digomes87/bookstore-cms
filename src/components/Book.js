import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ 
  id,
  title,
  category,
  handleBookRemove,
}) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td><button onClick={() => handleBookRemove(id)} type="button">X</button></td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleBookRemove: PropTypes.func.isRequired,
};

export default Book;
