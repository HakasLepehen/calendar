import React, { useState } from 'react';
import classes from './Moderation.module.css';
import Main from '../Main/Main.jsx';
import Employees from '../../Employees/Employees';
import { Context } from '../../../context/Context.js';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export default function Moderation() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const location = useLocation();
  const buttons = document.querySelectorAll('.nav_button');
  // const shifts = useSelector((state) => state.shiftReducer.shifts);
  // const tempShifts = useSelector((state) => state.shiftReducer.tempShifts);

  console.log(buttons);
  buttons.forEach((button) => {
    console.log('Getting buttons', ...buttons);
    button.addEventListener('click', (event) => {
      console.log('button', button);
      if (location.pathname === '/moderation') {
        console.log('Leaving page!');
      }
    });
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
