/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import classes from './Navbar.module.css';

export default function Navbar({ isChangedData, checkUser }) {
  const location = useLocation();
  const isChanged = useSelector((state) => state.shiftReducer.isChangedData);
  const links = useMemo(
    () => [
      <Link key={1} to="/" onClick={() => isChangedData(isChanged)}>
        На главную
      </Link>,
      <Link key={2} to={'/moderation'} onClick={checkUser(event)}>
        Изменить график
      </Link>,
    ],
    [isChanged]
  );

  return (
    <nav className={classes.nav}>
      <ul className={classes.menu}>
        {links
          .filter((link) => {
            return location.pathname !== link.props.to;
          })
          .map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
      </ul>
    </nav>
  );
}
