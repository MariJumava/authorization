import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './redux/user/index';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';

const store = setupStore();
const root: ReactDOM.Root = ReactDOM.createRoot(
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
