import React from 'react';
import { connect } from 'react-redux'
import Book from './Book'

class BookList extends React.Component{
    
    render(){
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
                    {books.map(e =>{
                        <Book id={e.id} title={e.title} category={e.category} />
                    })}
                </tbody>
            </table>
        </div>
    )
}
}

const mapStateToProps = (state, ownProps)=>{
    return {
        books: state.books
    }
}

export default BookList
