import React from 'react';
import classes from './Employee.module.css';

export default function Employee({ employee, onChangeValue }) {
  return (
    <label className={classes.employee} onChange={onChangeValue}>
      <input type="radio" value={employee.name} name="1" id={employee.id} />
      <span>{employee.name}</span>
    </label>
  );
}
