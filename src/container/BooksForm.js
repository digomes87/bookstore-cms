import React from 'react';

const bookCategories = ['Action', 'Biography', 'Drama', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
  <div>
    <h2>Add Book</h2>
    <form>
      <input type="text" name="title" />
      <select>
        {bookCategories.map((p, i) => (
          <option key={i}>{p}</option> /* eslint-disable-line */
        ))}
      </select>
      <button type="submit">Save</button>
    </form>
  </div>
);

export default BooksForm;

// import React from 'react';
// import { createBook } from '../actions/index'
// import {connect } from 'react-redux'

// const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

// class BooksForm extends React.Component { 
//   constructor(props){
//     super(props);
//     this.state = {
//       title: '',
//       category: ''
//     };
// 		this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event){
// 		event.target.tagName === 'input'
// 			? this.setState({title: event.target.value})
// 			: this.setState({category: event.target.value});
// 	}

//   handleSubmit(event){
// 		event.preventDefault();
// 		//dispatch to Redux
// 		this.setState({
// 			title: '',
// 			category: '',
// 		});
//   }

//   render() {
//     return(
//     <div>
//       <h2>BookList</h2>
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
// 				<select>
// 					{bookCategories.map((p, i) => (
// 						<option key={i} value={p} onChange={this.handleChange}>{p}</option> /* eslint-disable-line */
// 					))}
// 				</select>
//         <button type="submit">Save</button>
//       </form>
//     </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     createBook: book => dispatch(createBook(book))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);

// // export default BooksForm;
