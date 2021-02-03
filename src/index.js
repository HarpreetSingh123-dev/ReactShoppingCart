import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FinalAssembly from './Final_Assembly'
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux'
import {Provider} from 'react-redux'


import Reducer from './Reducers/CombineReducer'


/////////////////////////Below are two functions which are used to store redux Store////////////////
function saveToLocalStorage(store) {
  try {
      const serializedStore = JSON.stringify(store);
      window.localStorage.setItem('store', serializedStore);
  } catch(e) {
      console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
      const serializedStore = window.localStorage.getItem('store');
      if(serializedStore === null) return undefined;
      return JSON.parse(serializedStore);
  } catch(e) {
      console.log(e);
      return undefined;
  }
}

const persistedState = loadFromLocalStorage();

const Store = createStore(Reducer, persistedState)


Store.subscribe(() => saveToLocalStorage(Store.getState()));


//const Store = createStore(Reducer)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
    
      <FinalAssembly></FinalAssembly>
    
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
