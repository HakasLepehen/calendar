import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'react-router';
import Main from '../pages/Main.jsx';
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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
};

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default Index;
