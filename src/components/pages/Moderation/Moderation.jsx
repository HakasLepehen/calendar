import React, { useState } from 'react';
import classes from './Moderation.module.css';
import Main from '../Main/Main.jsx';
import Employees from '../../Employees/Employees';
import { Context } from '../../../context/Context.js';

export default function Moderation() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div className={classes.wrapper}>
      <Context.Provider value={{ selectedEmployee, setSelectedEmployee }}>
        <Main />
        <div className={classes.block}>
          <h3>Выберите необходимого сотрудника и добавьте ему смены, нажимая на нужный Вам день</h3>
          <Employees />
        </div>
      </Context.Provider>
    </div>
  );
}
