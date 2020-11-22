import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import './index.css';
import App from './Components/App';
import rootReducer from './Reducers'

// Functin logger(obj,next,action) = logger(obj)(next)(action)
// const logger = function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       // Middleware code
//       console.log('ACTION_TYPE =',action.type);
//       next(action);
//     }
//   }
// }

const logger = ({dispatch,getState}) => (next) => (action)=>{
  // logger code
     if(typeof action!=='function'){
       console.log('Action Type:', action.type);
     }
     next(action);
 }

    // const thunk = ({dispatch,getState})=> (next)=> (action) =>{
    //   // logger code
    //   if(typeof action === 'function'){
    //     action(dispatch);
    //     return;
    //   }
    //   next(action);
    // }


const store = createStore(rootReducer,applyMiddleware(logger,thunk));
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