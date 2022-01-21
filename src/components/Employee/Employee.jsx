import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Employee.module.css';

export default function Employee({ employee, selectingEmployee }) {
  const shifts = useSelector((state) => state.shiftReducer.tempShifts);

  const count = shifts.filter((shift) => shift.employee.id == employee.id).length;
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
      <span className={classes.countShifts}>{count}</span>
    </label>
  );
}
