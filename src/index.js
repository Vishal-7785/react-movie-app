import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import App from './Components/App';
import movies from './Reducers'

const store = createStore(movies);
// console.log('before state', store.getState());
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name:'Superman'}]
// });
// console.log('after state', store.getState());

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import reportWebVitals from './reportWebVitals';