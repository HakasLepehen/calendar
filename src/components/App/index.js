import React, { useState, useEffect } from 'react';
import './App.css';
import * as moment from 'moment';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Main from '../../pages/Main/Main.jsx';
import Moderation from '../../pages/Moderation/Moderation.jsx';
import Modal from '../UI/Modal/Modal';

import Navbar from '../UI/Navbar/Navbar.jsx';
import { setAuth, resetChanges, saveTempShifts, fetchEmployees } from '../../actions/actions.js';
import { useSelector } from 'react-redux';

window.moment = moment; // change weekdays in europe-like version

const Index = () => {
  const [isChangedShifts, setIsChangedShifts] = useState(false);
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

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

      if (message === 'vesnaVseMoget') {
        return dispatch(setAuth(true));
      } else {
        event.preventDefault();
        alert('Пароль неверный!');
        return dispatch(setAuth(false));
      }
    };
  };

  return (
    <>
      <Modal isModalVisible={isChangedShifts} onSubmit={submitHandler} onClose={closeHandler} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/moderation" element={<Moderation />}></Route>
        <Route path="*" element={<Main />} />
      </Routes>
      <Navbar isChangedData={isChangedData} checkUser={checkUser} />
    </>
  );
};

export default Index;
