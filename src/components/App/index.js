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
import { SAVE_TEMP_SHIFTS } from '../../reducers/shiftReducer';

window.moment = moment; // change weekdays in europe-like version

//Initialize current user
const user = {
  isAdmin: false,
  isModerator: true,
};

const Index = () => {
  const [isChanged, setIsChanged] = useState(false);
  const dispatch = useDispatch();
  const adminComponent = useMemo(
    () => (user.isAdmin ? <Admin /> : <div> У Вас нет доступа к этому URL </div>),
    [user]
  );

  const isChangedData = (changed) => {
    changed ? setIsChanged(true) : setIsChanged(false);
  };

  const closeHandler = () => {
    return setIsChanged(false);
  };

  const submitHandler = () => {
    console.log('Сработал submit!!!!');
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
