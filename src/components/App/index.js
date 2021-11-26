import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Main from '../pages/Main.jsx';
import Admin from '../pages/Admin';
import Moderation from '../pages/Moderation';
import * as moment from 'moment';
// Import moment.js and russian locale from library
import 'moment/locale/ru';

moment.locale('ru');
window.moment = moment;

const weekdays = moment.weekdays(true); // change weekdays in europe-like version

/**
 * Main function of my application
 */
const Index = () => {
  //тут я получаю извне данные по правам пользователя и задаю свои права на чтение и редактирование
  const user = {
    isAdmin: true,
    isModerator: true,
  };

  if (user.isAdmin) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/moderation" element={<Moderation />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <nav>
          <ul>
            <li>
              <Link to="/">На главную</Link>
            </li>
            <li>
              <Link to="/moderation">Изменить</Link>
            </li>
            <li>
              <Link to="/admin">Администратору</Link>
            </li>
          </ul>
        </nav>
      </Router>
    );
  }

  if (user.isModerator) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/moderation" element={<Moderation />} />
          <Route path="/admin" element={<div>У Вас нет доступа к этому URL</div>} />
        </Routes>
        <nav>
          <ul>
            <li>
              <Link to="/">На главную</Link>
            </li>
            <li>
              <Link to="/moderation">Изменить</Link>
            </li>
          </ul>
        </nav>
      </Router>
    );
  }

  return <Main />;
};

export default Index;
