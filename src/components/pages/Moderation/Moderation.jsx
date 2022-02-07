import React, { useState, useEffect } from 'react';
import classes from './Moderation.module.css';
import Main from '../Main/Main.jsx';
import Employees from '../../Employees/Employees';
import { Context } from '../../../context/Context.js';
import { useSelector, useDispatch } from 'react-redux';
import { SYNCHRONIZE_ARRAYS } from '../../../reducers/shiftReducer';

export default function Moderation() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const dispatch = useDispatch();
  const shifts = useSelector((state) => state.shiftReducer.shifts);

  window.prompt('Привет!');

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
          <h3>
            Выберите необходимого сотрудника и добавьте ему смены, нажимая на нужный Вам день!
          </h3>
          <Employees />
        </div>
      </Context.Provider>
    </div>
  );
}
