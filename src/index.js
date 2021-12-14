import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import './index.css';
import Index from './components/App';

// const authLink =
//   'https://domain.ru/oauth/authorize/?client_id=app.573ad8a0346747.09223434&state=JJHgsdgfkdaslg7lbadsfg';
//кидаешь запрос сюда подставляя код приложения, затем резко кидаешь сюда заменяя все переменные

// https://oauth.bitrix.info/oauth/token/?
//     grant_type=authorization_code
//     &client_id=app.573ad8a0346747.09223434
//     &client_secret=LJSl0lNB76B5YY6u0YVQ3AW0DrVADcRTwVr4y99PXU1BWQybWK
//     &code=avmocpghblyi01m3h42bljvqtyd19sw1

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
