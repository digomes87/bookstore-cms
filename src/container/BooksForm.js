import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };
  }

  handleChange = (event) => (
    event.target.tagName === 'INPUT'
      ? this.setState({ title: event.target.value })
      : this.setState({ category: event.target.value })
  )


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createBook(this.state);/* eslint-disable-line */
  }

  render() {
    const bookCategories = ['Action', 'Biography', 'Drama', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { title, category } = this.state;
    return (
      <div>
        <h2>Add Book</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" onChange={this.handleChange} value={title} />
          <select onChange={this.handleChange} value={category}>
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

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
