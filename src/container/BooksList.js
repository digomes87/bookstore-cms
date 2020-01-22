import React from 'react';
import Book from '../components/Book';


class BooksList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      category: ''
    };
  }

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
          {books.map(e => (
            <Book id={e.id} title={e.title} category={e.category} key={e.id} />
          ))}
        </tbody>
      </table>
    </div>
    )
  } 
}
export default BooksList;
