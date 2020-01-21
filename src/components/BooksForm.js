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
		event.target.tagName === 'input'
			? this.setState({title: event.target.value})
			: this.setState({category: event.target.value});
	}

  handleSubmit(){
		event.preventDefault();
		//dispatch to Redux
		this.setState({
			title: '',
			category: '',
		});
  }

  render() {
    <div>
      <h2>BookList</h2>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
				<select>
					{bookCategories.map((p, i) => (
						<option key={i} value={p} onChange={this.handleChange}>{p}</option> /* eslint-disable-line */
					))}
				</select>
        <button type="submit">Save</button>
      </form>
    </div>
  }
}

export default BooksForm;
