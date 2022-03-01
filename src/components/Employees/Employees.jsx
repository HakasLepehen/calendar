import React, { useContext } from 'react';
import Employee from '../Employee/Employee';
import classes from './Employees.module.css';
import { Context } from '../../context/Context.js';
import { useSelector } from 'react-redux';

//In this component should getting array of employees and render them on page

export default function Employees() {
  const { setSelectedEmployee } = useContext(Context);

  const employees = useSelector((state) => state.employeeReducer.users);

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
