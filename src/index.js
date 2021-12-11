import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import './index.css';
import Index from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Index
        style={{
          height: '100vh',
        }}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
