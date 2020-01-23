import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter } from '../actions/index';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleFilterChange = (event) => (
    this.props.changeFilter(event.target.value)
  )

  render() {
    console.log(this.props);
    const { books } = this.props.items; /* eslint-disable-line */
    return (
      <div>
        <CategoryFilter filterChange={this.handleFilterChange} />
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

const mapStateToProps = (state) => ({ items: state });

BooksList.propTypes = {
  items: PropTypes.instanceOf(Object).isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => dispatch(changeFilter(filter)),
});


export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
