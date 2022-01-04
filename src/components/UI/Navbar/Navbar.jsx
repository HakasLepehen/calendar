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

  console.log('render navbar');
  function Lin({ id, path, child }) {
    return (
      <li onClick={isHaveChanges(event)} id={id}>
        <Link to={path} className={'nav_button'}>
          {child}
        </Link>
      </li>
    );
  }
  const [links, setLinks] = useState([
    <Lin key={1} path={'/'} child={'На главную'} />,
    <Lin key={2} path={'/moderation'} child={'Изменить график'} />,
    <Lin key={3} path={'/admin'} child={'Управление'} />,
  ]);

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
    <nav className={classes.nav}>
      <ul className={classes.menu}>
        {links.filter((link) => {
          return location.pathname !== link.props.path;
        })}
      </ul>
    </nav>
  );
}
