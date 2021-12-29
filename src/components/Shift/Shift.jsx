import React from 'react';
import { useLocation } from 'react-router';
import classes from './Shift.module.css';

const Shift = ({ shift, removeShift }) => {
  const location = useLocation();
  if (location.pathname === '/moderation') {
    return (
      <div className={classes.shift_moderable}>
        <div className={classes.label}>{shift.employee.name}</div>
        <button className={classes.delete} role="button" onClick={removeShift(shift)}>
          <span className={`material-icons ${classes.delete}`}>person_remove</span>
        </button>
      </div>
    );
  }
  return (
    <div className={classes.shift}>
      <div className={classes.label}>{shift.employee.name}</div>
    </div>
  );
};

export default Shift;
