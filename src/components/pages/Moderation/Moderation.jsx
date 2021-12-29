import React, { useState, useEffect } from 'react';
import classes from './Moderation.module.css';
import Main from '../Main/Main.jsx';
import Employees from '../../Employees/Employees';
import { Context } from '../../../context/Context.js';
import { useSelector, useDispatch } from 'react-redux';
import { COPY_SHIFTS, SYNCHRONIZE_ARRAYS } from '../../../reducers/shiftReducer';

export default function Moderation() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const dispatch = useDispatch();
  const shifts = useSelector((state) => state.shiftReducer.shifts);
  const tempShifts = useSelector((state) => state.shiftReducer.tempShifts);
  const isChanged = useSelector((state) => state.shiftReducer.isChangedData);

  useEffect(() => {
    const buttons = document.querySelectorAll('.nav_button');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        console.log('clicked', isChanged);
        if (isChanged) {
          dispatch({
            type: COPY_SHIFTS,
            shifts: tempShifts,
          });
        }
      });
    });
  }, [tempShifts]);

  //copy shifts from /root page in /moderation
  useEffect(() => {
    dispatch({
      type: SYNCHRONIZE_ARRAYS,
      shifts: shifts,
    });
  }, []);

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
