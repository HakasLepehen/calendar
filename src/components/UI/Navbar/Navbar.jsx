import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import classes from './Navbar.module.css';

export default function Navbar() {
  const location = useLocation();
  const isChanged = useSelector((state) => state.shiftReducer.isChangedData);

  const openModal = () => {
    console.log('Modal Window is opened');
  };

  const isHaveChanges = () => {
    isChanged ? openModal() : null;
  };

  return (
    <nav className={classes.nav}>
      <ul className={classes.menu}>
        {location.pathname !== '/' ? (
          <li onClick={isHaveChanges}>
            <Link to="/" className={'nav_button'}>
              На главную
            </Link>
          </li>
        ) : null}

        {location.pathname !== '/moderation' ? (
          <li onClick={isHaveChanges}>
            <Link to="/moderation" className={'nav_button'}>
              Изменить график
            </Link>
          </li>
        ) : null}

        {location.pathname !== '/admin' ? (
          <li onClick={isHaveChanges}>
            <Link to="/admin" className={'nav_button'}>
              Управление
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
