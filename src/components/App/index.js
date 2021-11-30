import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Main from '../pages/Main/Main.jsx';
import Admin from '../pages/Admin';
import Moderation from '../pages/Moderation/Moderation.jsx';
import * as moment from 'moment';
// Import moment.js and russian locale from library
import 'moment/locale/ru';
import Navbar from '../UI/Navbar';

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
    isModerator: false,
  };

  if (user.isAdmin) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/moderation" element={<Moderation />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Navbar />
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
        <Navbar />
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default Index;
