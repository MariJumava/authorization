import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
//import thunk from 'redux-thunk';
//import { configureStore } from '@reduxjs/toolkit';
import { rootReducer, setupStore } from './redux/user/index';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';

const store = setupStore();
//const store = configureStore({ reducer: rootReducer, middleware: [thunk] });
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
