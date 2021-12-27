import React, { useState, useEffect } from 'react';
import classes from './Moderation.module.css';
import Main from '../Main/Main.jsx';
import Employees from '../../Employees/Employees';
import { Context } from '../../../context/Context.js';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export default function Moderation() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const location = useLocation();
  const shifts = useSelector((state) => state.shiftReducer.shifts);
  const tempShifts = useSelector((state) => state.shiftReducer.tempShifts);

  useEffect(() => {
    const buttons = document.querySelectorAll('.nav_button');
    console.log('Beginning effect');

    buttons.forEach((button) => {
      button.addEventListener('click', (event) => {
        console.log('переходим на другую страницу1', shifts);
        console.log('переходим на другую страницу2', tempShifts);
      });
    });
    console.log('ending effect');
  });

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
