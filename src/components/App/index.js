import React, { useState, useMemo } from 'react';
import './App.css';
import * as moment from 'moment';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Main from '../pages/Main/Main.jsx';
import Admin from '../pages/Admin/Admin';
import Moderation from '../pages/Moderation/Moderation.jsx';
import Modal from '../UI/Modal/Modal';

import Navbar from '../UI/Navbar/Navbar.jsx';
import { SAVE_TEMP_SHIFTS, RESET_CHANGES } from '../../reducers/shiftReducer';

window.moment = moment; // change weekdays in europe-like version

//Initialize current user
const user = {
  isAdmin: true,
  isModerator: false,
};

const Index = () => {
  const [isChanged, setIsChanged] = useState(false);
  const dispatch = useDispatch();
  const adminComponent = useMemo(
    () =>
      user.isAdmin ? (
        <Admin />
      ) : (
        <h2 style={{ textAlign: 'center' }}> У Вас нет доступа к этой странице </h2>
      ),
    [user]
  );

  const isChangedData = (changed) => {
    changed ? setIsChanged(true) : setIsChanged(false);
  };

  const closeHandler = () => {
    dispatch({ type: RESET_CHANGES });
    return setIsChanged(false);
  };

  const submitHandler = () => {
    dispatch({ type: SAVE_TEMP_SHIFTS });
    setIsChanged(false);
  };

  if (user.isAdmin || user.isModerator) {
    return (
      <>
        <Modal isModalVisible={isChanged} onSubmit={submitHandler} onClose={closeHandler} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/moderation" element={<Moderation />} />
          <Route path="/admin" element={adminComponent} />
        </Routes>
        <Navbar isChangedData={isChangedData} />
      </>
    );
  }

  return <Main />;
};

export default Index;
