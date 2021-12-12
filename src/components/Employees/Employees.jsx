import React, { useState } from 'react';
import Employee from '../Employee/Employee';
import classes from './Employees.module.css';

import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { SELECT_EMPLOYEE } from '../../reducers/selectEmployee.js';

//In this component should getting array of employees and render them on page

export default function Employees({ ...props }) {
  const dispatch = useDispatch();
  const [employees, setEmployees] = useState([
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
    dispatch({
      type: SELECT_EMPLOYEE,
      employee: { id: event.target.id, name: event.target.value },
    });
  }
  return (
    <div className={classes.employees} onChange={selectingEmployee}>
      {employees.map((employee) => (
        <Employee employee={employee} key={employee.id} />
      ))}
    </div>
  );
}
