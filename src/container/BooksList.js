import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions'
 
class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleBookRemove = (book) => {
    this.props.removeBook(book)
  }

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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {books.map(e => (
              <Book id={e.id} title={e.title} category={e.category} key={e.id} handleBookRemove={this.handleBookRemove} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ books: state });

const mapDispatchToProps = (dispatch) => {
  return {
    removeBook: book => dispatch(removeBook(book))
  }
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
