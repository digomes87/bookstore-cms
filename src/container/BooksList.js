import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter } from '../actions/index';
import { removeBook } from '../actions';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleBookRemove = (book) => {
    const { removeBook } = this.props;
    removeBook(book);
  }

  handleFilter = (filter) => { this.props.changeFilter(filter) }

  render() {
    console.log(this.props);
    const { books } = this.props.items; /* eslint-disable-line */
    console.log(books)
    return (
      <div>
        <CategoryFilter handleFilter={this.handleFilter} />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {books
              .filter(el => this.props.items.filter === 'ALL'
                ? el
                : el.category === this.props.items.filter
              )
              .map(e => (
                <Book
                id={e.id}
                title={e.title}
                category={e.category}
                key={e.id}
                handleBookRemove={this.handleBookRemove}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ items: state });

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => dispatch(changeFilter(filter)),
  removeBook: book => dispatch(removeBook(book)),
});

BooksList.propTypes = {
  items: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
