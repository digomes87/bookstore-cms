import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../components/App';
import rootReducer from './reducers/index';

const getID = () => Math.floor(Math.random() * 1000);

const initialState = {
  books: [
    {
      id: getID(),
      title: 'Wuthering Heights',
      category: 'Drama',
    },
    {
      id: getID(),
      title: 'Dracula',
      category: 'Horror',
    },
    {
      id: getID(),
      title: 'The Universe in a Nutshell',
      category: 'Science',
    },
  ]
};

const store = createStore(rootReducer, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
