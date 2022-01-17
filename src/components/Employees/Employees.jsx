import React, { useState, useContext } from 'react';
import Employee from '../Employee/Employee';
import classes from './Employees.module.css';
import { Context } from '../../context/Context.js';

//In this component should getting array of employees and render them on page

export default function Employees() {
  const { setSelectedEmployee } = useContext(Context);

  const [employees] = useState([
    {
      id: 1,
      name: 'Гуров Павел',
    },
    {
      id: 2,
      name: 'Белозеров Сергей',
    },
    {
      id: 3,
      name: 'Поляк Степан',
    },
    {
      id: 4,
      name: 'Гуров Павел',
    },
    {
      id: 5,
      name: 'Гуров Павел',
    },
    {
      id: 6,
      name: 'Гуров Павел',
    },
    {
      id: 7,
      name: 'Гуров Павел',
    },
    {
      id: 8,
      name: 'Гуров Павел',
    },
    {
      id: 9,
      name: 'Гуров Павел',
    },
  ]);

  const selectingEmployee = (event) => {
    event.stopPropagation();

    setSelectedEmployee({
      id: event.target.id,
      name: event.target.value,
    });
  };
  return (
    <div className={classes.employees}>
      {employees.map((employee) => (
        <Employee employee={employee} key={employee.id} selectingEmployee={selectingEmployee} />
      ))}
    </div>
  );
}
