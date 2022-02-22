import React, { useState } from 'react';
import './App.css';
import * as moment from 'moment';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Main from '../../pages/Main/Main.jsx';
import Moderation from '../../pages/Moderation/Moderation.jsx';
import Modal from '../UI/Modal/Modal';

import Navbar from '../UI/Navbar/Navbar.jsx';
// import { SAVE_TEMP_SHIFTS, RESET_CHANGES } from '../../reducers/shiftReducer';
import { SET_AUTH, SAVE_TEMP_SHIFTS, RESET_CHANGES } from '../../constants/constants.js';

window.moment = moment; // change weekdays in europe-like version

const Index = () => {
  const [isChanged, setIsChanged] = useState(false);
  const dispatch = useDispatch();
  let a = null;

  // console.log(a ===);

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

  //check password to moderate shifts
  const checkUser = () => {
    return (event) => {
      const message = window.prompt('Введите пароль');

      message === 'vesnaVseMoget'
        ? dispatch({ type: SET_AUTH, isAuth: true })
        : dispatch({ type: SET_AUTH, isAuth: false });
    };
    // return false;
  };

  return (
    <>
      <Modal isModalVisible={isChanged} onSubmit={submitHandler} onClose={closeHandler} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/moderation" element={<Moderation />} />
      </Routes>
      <Navbar isChangedData={isChangedData} checkUser={checkUser} />
    </>
  );
};

export default Index;
