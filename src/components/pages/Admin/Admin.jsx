import React, { useState } from 'react';
import { Context } from '../../../context/Context';
import Employees from '../../Employees/Employees';
import classes from './Admin.module.css';

export default function Admin() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  console.log(selectedEmployee);
  return (
    <div className={classes.adminBlock}>
      <Context.Provider value={{ selectedEmployee, setSelectedEmployee }}>
        <h2 className={classes.title}>Выберите модератора графика</h2>
        <div className={classes.content}>
          <Employees />
        </div>
      </Context.Provider>
    </div>
  );
}
