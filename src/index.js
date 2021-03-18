import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import allReducer from './Reducers'


const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//STORE -> Globalized all the states

//Action -> increment -> What actually we will do here
// const Increment = () => {
//   return {
//     type:'INCREMENT'
//   }
// } 

// const Decrement = () =>{
//   return {
//     type:'DECREMENT'
//   }
// }
// //Reducer -> checks how out action changes/transform from one state to the new state

// const Counter = (count = 0, action) =>{
//   switch (action.type){
//     case 'INCREMENT':
//       return count + 1
//     case 'DECREMENT':
//       return count - 1
//   }

// }
// let store = createStore(Counter)

// //display it on the console
// store.subscribe(()=> console.log(store.getState()))

// //Dispatch -> dispatch the action with reducer and update it in the store
// store.dispatch(Increment())
// store.dispatch(Decrement())
// store.dispatch(Decrement())



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
         <App />
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
