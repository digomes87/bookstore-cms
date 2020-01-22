import React from 'react';
import Book from '../components/Book';
import { connect } from 'react-redux';

class BooksList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: this.props.items,
    };
  };
  
  render() {
    return(
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
    )
  } 
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.books,
  }
}

export default connect(mapStateToProps)(BooksList);
