import React, { useState } from 'react';
import Employee from '../Employee/Employee';
import classes from './Employees.module.css';

//In this component should getting array of employees and render them on page

export default function Employees({ setSelectedEmployee }) {
  const [employees, setEmployees] = useState([]);

  function onChangeValue(event) {
    setSelectedEmployee(event.target.value);
    console.log('setSelectedEmployee are ', setSelectedEmployee);
  }
  return (
    <div className={classes.employees}>
      <Employee onChangeValue={onChangeValue} />
      <Employee onChangeValue={onChangeValue} />
      <Employee onChangeValue={onChangeValue} />
      <Employee onChangeValue={onChangeValue} />
      <Employee onChangeValue={onChangeValue} />
      <Employee onChangeValue={onChangeValue} />
    </div>
  );
}
