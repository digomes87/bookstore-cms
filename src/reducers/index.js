import { combineReducers } from 'redux'
import books from './book'
import { createBook, removeBook } from '../actions/index'

export default combineReducers({
  books,
  createBook,
  removeBook,
})
