import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Context } from '../../../context/Context';
import Employees from '../../Employees/Employees';
import classes from './Admin.module.css';
import { SET_MODERATOR } from '../../../reducers/moderatorReducer';
import Button from '../../UI/Button/Button';

export default function Admin() {
  const dispatch = useDispatch();
  const [selectedEmployee, setSelectedEmployee] = useState(null);

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
      </Context.Provider>
    </div>
  );
}
