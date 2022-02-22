import React, { useState, useEffect } from 'react';
import classes from './Moderation.module.css';
import Main from '../Main/Main.jsx';
import Employees from '../../components/Employees/Employees.jsx';
import { Context } from '../../context/Context.js';
import { useSelector, useDispatch } from 'react-redux';
import { SYNCHRONIZE_ARRAYS } from '../../constants/constants.js';
import { synchronizeShifts } from '../../actions/actions';

export default function Moderation() {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const dispatch = useDispatch();
  const shifts = useSelector((state) => state.shiftReducer.shifts);

  // useEffect(() => {
  //   return checkUser();
  // }, []);

  //copy shifts from /root page in /moderation
  useEffect(() => {
    dispatch(synchronizeShifts(shifts));
  }, []);
  if (isAuth) {
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
  return <></>;
}
