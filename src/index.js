import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import './index.css';
import Index from './components/App';

// const authLink =
//   'https://domain.ru/oauth/authorize/?client_id=yourAppCode';
//кидаешь запрос сюда подставляя код приложения, затем резко кидаешь сюда заменяя все переменные

// https://oauth.bitrix.info/oauth/token/?
//     grant_type=authorization_code
//     &client_id=YOUR_CLIENT_ID
//     &client_secret=YOUR_CLIENT_SECRET
//     &code=YOUR TOKEN

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/calendar/">
      <Provider store={store}>
        <Index />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
