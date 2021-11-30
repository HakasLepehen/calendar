import React from 'react';
import Employee from '../Employee/Employee';
import classes from './Employees.module.css';

export default function Employees() {
  return (
    <div className={classes.employees}>
      <Employee />
      <Employee />
      <Employee />
      <Employee />
      <Employee />
      <Employee />
      <Employee />
      <Employee />
      <Employee />
      <Employee />
      <Employee />
    </div>
  );
}
