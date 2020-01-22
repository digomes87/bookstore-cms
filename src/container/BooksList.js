import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import PropTypes from 'prop-types';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    const { items } = this.props;
    this.state = {
      books: items,
    };
  }

  render() {
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
            {this.state.books.map(e => (
              <Book id={e.id} title={e.title} category={e.category} key={e.id} />
            ))}
          </tbody>
        </table>
      </div>
    );
  } 
}

const mapStateToProps = (state) => {
  return {
    items: state.books,
  };
};

BooksList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(BooksList);
