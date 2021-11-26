import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'react-router';
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
  return (
    <Router>
      <div>
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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      </div>
    </Router>
  );
};

export default Index;
