import React, { useState } from 'react';
import './App.css';
import * as moment from 'moment';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Main from '../../pages/Main/Main.jsx';
import Moderation from '../../pages/Moderation/Moderation.jsx';
import Modal from '../UI/Modal/Modal';

import Navbar from '../UI/Navbar/Navbar.jsx';
import { setAuth, resetChanges, saveTempShifts } from '../../actions/actions.js';

window.moment = moment; // change weekdays in europe-like version

const Index = () => {
  const [isChangedShifts, setIsChangedShifts] = useState(false);
  const dispatch = useDispatch();

  const isChangedData = (changed) => {
    changed ? setIsChangedShifts(true) : setIsChangedShifts(false);
  };

  const closeHandler = () => {
    dispatch(resetChanges());
    return setIsChangedShifts(false);
  };

  const submitHandler = () => {
    dispatch(saveTempShifts());
    setIsChangedShifts(false);
  };

  //check password to moderate shifts
  const checkUser = () => {
    return (event) => {
      const message = window.prompt('Введите пароль');

      message === 'vesnaVseMoget' ? dispatch(setAuth(true)) : dispatch(setAuth(false));
    };
  };

  return (
    <>
      <Modal isModalVisible={isChangedShifts} onSubmit={submitHandler} onClose={closeHandler} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/moderation" element={<Moderation />} />
      </Routes>
      <Navbar isChangedData={isChangedData} checkUser={checkUser} />
    </>
  );
};

export default Index;
