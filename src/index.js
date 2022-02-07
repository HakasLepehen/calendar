import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import './index.css';
import Index from './components/App';

// const authLink =
//   'https://sonarportal.ru/oauth/authorize/?client_id=yourAppCode/?redirect_url=https://sonarportal.ru';
//кидаешь запрос сюда подставляя код приложения, затем резко кидаешь сюда заменяя все переменные

//https://sonarportal.ru/marketplace/local/calendar/test-app/index.js?code=f2e2f86100592d2400453e2e000000f4000003064307f3825e4ccb53b645147bdf77a0&state=&domain=sonarportal.ru&member_id=076242af67f53a3d0151836cafd4cc86&scope=crm%2Cuser&server_domain=oauth.bitrix.info

// https://oauth.bitrix.info/oauth/token/?
//     grant_type=authorization_code
//     &client_id=YOUR_CLIENT_ID
//     &client_secret=YOUR_CLIENT_SECRET
//     &code=YOUR TOKEN

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Index />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
