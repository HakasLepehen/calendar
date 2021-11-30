import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Index
      style={{
        height: '100vh',
      }}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
