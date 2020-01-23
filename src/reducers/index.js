import { combineReducers } from 'redux';
import bookReducers from './book';
import visibilityFilter from './filter';

const rootReducer = combineReducers({
  bookReducers,
  visibilityFilter,
});

export default rootReducer;
