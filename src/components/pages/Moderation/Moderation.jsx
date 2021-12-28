import React, { useState, useEffect } from 'react';
import classes from './Moderation.module.css';
import Main from '../Main/Main.jsx';
import Employees from '../../Employees/Employees';
import { Context } from '../../../context/Context.js';
import { useSelector } from 'react-redux';

export default function Moderation() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const shifts = useSelector((state) => state.shiftReducer.shifts);
  const tempShifts = useSelector((state) => state.shiftReducer.tempShifts);

  useEffect(() => {
    const buttons = document.querySelectorAll('.nav_button');

    buttons.forEach((button) => {
      button.addEventListener('click', (event) => {
        shifts.forEach((shift) => {
          if (tempShifts.includes(shift)) {
            return alert('No');
          } else {
            return alert('Yes');
          }
        });
      });
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
