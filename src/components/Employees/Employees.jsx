import React, { useState, useContext } from 'react';
import Employee from '../Employee/Employee';
import classes from './Employees.module.css';
import { Context } from '../../context/Context.js';

import { v4 as uuidv4 } from 'uuid';

//In this component should getting array of employees and render them on page

export default function Employees() {
  const { setSelectedEmployee } = useContext(Context);

  const [employees] = useState([
    {
      id: uuidv4(),
      name: 'Гуров Павел',
    },
    {
      id: uuidv4(),
      name: 'Белозеров Сергей',
    },
    {
      id: uuidv4(),
      name: 'Поляк Степан',
    },
  ]);

  function selectingEmployee(event) {
    event.stopPropagation();

    setSelectedEmployee({
      id: event.target.id,
      name: event.target.value,
    });
  }
  return (
    <div className={classes.employees}>
      {employees.map((employee) => (
        <Employee employee={employee} key={employee.id} selectingEmployee={selectingEmployee} />
      ))}
    </div>
  );
}
