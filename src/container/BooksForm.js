import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action'
    };
  }

  handleChange = (event) => {
    event.target.tagName === 'INPUT'
      ? this.setState({title: event.target.value})
      : this.setState({category: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createBook(this.state)
  }

  render() {
    const bookCategories = ['Action', 'Biography', 'Drama', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <div>
        <h2>Add Book</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
          <select onChange={this.handleChange} value={this.state.category}>
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
  createBook: book => dispatch(createBook(book))
});

export default connect(null, mapDispatchToProps)(BooksForm);
