import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './Navbar.module.css';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className={classes.nav}>
      <ul className={classes.menu}>
        {location.pathname !== '/' ? (
          <li>
            <Link to="/">На главную</Link>
          </li>
        ) : null}

        {location.pathname !== '/moderation' ? (
          <li>
            <Link to="/moderation">Изменить график</Link>
          </li>
        ) : null}

        {location.pathname !== '/admin' ? (
          <li>
            <Link to="/admin">Управление</Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
