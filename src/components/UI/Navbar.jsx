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
            <Link to="/" className={classes.nav_button}>
              На главную
            </Link>
          </li>
        ) : null}

        {location.pathname !== '/moderation' ? (
          <li>
            <Link to="/moderation" className={classes.nav_button}>
              Изменить график
            </Link>
          </li>
        ) : null}

        {location.pathname !== '/admin' ? (
          <li>
            <Link to="/admin" className={classes.nav_button}>
              Управление
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
