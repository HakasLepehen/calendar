import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { checkLocation } from '../../../utils/checkers';
import Modal from '../Modal/Modal';
import classes from './Navbar.module.css';

export default function Navbar() {
  const location = useLocation();
  const isChanged = useSelector((state) => state.shiftReducer.isChangedData);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    return <Modal />;
  };

  const isHaveChanges = () => {
    if (isChanged) {
      return (event) => {
        event.stopPropagation();
        event.preventDefault();
        openModal();
      };
      return;
    }
  };

  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.menu}>
          {location.pathname !== '/' ? (
            <li onClick={isHaveChanges(event)}>
              <Link to="/" className={'nav_button'}>
                На главную
              </Link>
            </li>
          ) : null}

          {location.pathname !== '/moderation' ? (
            <li onClick={isHaveChanges(event)}>
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
    </>
  );
}
