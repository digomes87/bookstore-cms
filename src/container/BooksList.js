import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

class BooksList extends React.Component {
  render() {
    const { books } = this.props;
    return (
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
            {books.map(e => (
              <Book id={e.id} title={e.title} category={e.category} key={e.id} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ books: state });

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(BooksList);