/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import classes from './Navbar.module.css';

export default function Navbar({ isChangedData }) {
  const location = useLocation();
  const isChanged = useSelector((state) => state.shiftReducer.isChangedData);
  const links = useMemo(
    () => [
      <Link key={1} to="/" onClick={() => isChangedData(isChanged)}>
        На главную
      </Link>,
      <Link key={2} to={'/moderation'} onClick={() => isChangedData(isChanged)}>
        Изменить график
      </Link>,
      <Link key={3} to={'/admin'} onClick={() => isChangedData(isChanged)}>
        Управление
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
