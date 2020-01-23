import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

const getID = () => Math.floor(Math.random() * 1000);
const initialState = [
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
    category: 'Learning',
  },
];

const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
