import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore } from 'redux';
import { enthusiasm }  from './reducers/index';
import { StoreState }  from './types/index'; 
import Greeting from './containers/Greeting';
import { Provider } from 'react-redux';

const store = legacy_createStore<StoreState>({
  languageName: 'TypeScript',
  enthusiasmLevel: 1,
}, enthusiasm);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Greeting />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
