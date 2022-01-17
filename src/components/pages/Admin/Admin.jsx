import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Context } from '../../../context/Context';
import Employees from '../../Employees/Employees';
import classes from './Admin.module.css';
import { SET_MODERATOR } from '../../../reducers/moderatorReducer';
import Button from '../../UI/Button/Button';

export default function Admin() {
  const dispatch = useDispatch();
  const moderator = useSelector((state) => state.moderatorReducer.moderator);
  const [selectedEmployee, setSelectedEmployee] = useState(moderator);

  const add = () => {
    dispatch({
      type: SET_MODERATOR,
      moderator: selectedEmployee,
    });
  };

  console.log(selectedEmployee);
  return (
    <div className={classes.adminBlock}>
      <Context.Provider value={{ selectedEmployee, setSelectedEmployee }}>
        <h2 className={classes.title}>Выберите модератора графика</h2>
        <div className={classes.content}>
          <Employees />
        </div>
        <Button classType={'submit'} action={add} value={'Назначить модератором'} />
        <div className={classes.actualModerator}>
          <span className={classes.moderatorLabel}>Текущий модератор:</span>
          <span className={classes.moderator}>{moderator.name}</span>
        </div>
      </Context.Provider>
    </div>
  );
}
