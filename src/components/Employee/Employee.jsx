import React from 'react';
import classes from './Employee.module.css';

export default function Employee({ employee, selectingEmployee }) {
  return (
    <label className={classes.employee}>
      <input
        type="radio"
        value={employee.name}
        name="employee"
        id={employee.id}
        onClick={selectingEmployee}
      />
      <span className={classes.employeeName}>{employee.name}</span>
      <span className={classes.countShifts}>12</span>
    </label>
  );
}
