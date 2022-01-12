import React, { useState, useMemo } from 'react';
import './App.css';
import * as moment from 'moment';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main.jsx';
import Admin from '../pages/Admin/Admin';
import Moderation from '../pages/Moderation/Moderation.jsx';
import Modal from '../UI/Modal/Modal';

import Navbar from '../UI/Navbar/Navbar.jsx';

window.moment = moment; // change weekdays in europe-like version

//Initialize current user
const user = {
  isAdmin: false,
  isModerator: true,
};

const Index = () => {
  const [isChanged, setIsChanged] = useState(false);
  const adminComponent = useMemo(
    () => (user.isAdmin ? <Admin /> : <div> У Вас нет доступа к этому URL </div>),
    [user]
  );

  const isChangedData = (changed) => {
    changed ? setIsChanged(true) : setIsChanged(false);
  };

  if (user.isAdmin || user.isModerator) {
    return (
      <>
        <Modal isModalVisible={isChanged} onClose={() => setIsChanged(false)} />
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
