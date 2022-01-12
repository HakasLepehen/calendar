/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { checkLocation } from '../../../utils/checkers';
import classes from './Navbar.module.css';

export default function Navbar({ isChangedData }) {
  const location = useLocation();
  const isChanged = useSelector((state) => state.shiftReducer.isChangedData);
  const checkPath = () => {
    if (location.pathname !== '/') {
      return isChangedData(isChanged);
    }
  };
  const links = useMemo(
    () => [
      <Link key={1} to="/" onClick={checkPath}>
        На главную
      </Link>,
      <Link key={2} to={'/moderation'} onClick={checkPath}>
        Изменить график
      </Link>,
      <Link key={3} to={'/admin'} onClick={checkPath}>
        Управление
      </Link>,
    ],
    [isChanged]
  );

  console.log(location.pathname);

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
