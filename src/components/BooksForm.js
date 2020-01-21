import React from 'react';

const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      title: '',
      category: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){

    this.setState({
      title: event.target.value 
    })
  }


  handleSubmit(){
    event.preventDefault();
  }

  render() {
    <div>
      <h2>BookList</h2>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" />
        {bookCategories.map((p, i) => (
          <select key={i}>{p}</select> /* eslint-disable-line */
        ))}
        <button type="submit">Save</button>
      </form>
    </div>
  }
}
export default BooksForm;
