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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    event.target.tagName === 'INPUT'
      ? this.setState({title: event.target.value})
      : this.setState({category: event.target.value});
      console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    const newBook = {
      title: this.state.title,
      category: this.state.category,
      type: 'CREATE_BOOK',
    };
    this.props.createBook(this.props.items.books, newBook);
    console.log(this.props.items);
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

const mapStateToProps = (state) => ({ items: state.books });

const mapDispatchToProps = dispatch => {
  return {
    createBook: () => {
      dispatch(createBook())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
