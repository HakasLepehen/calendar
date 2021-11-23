import React from 'react';
import classes from './Shift.module.css';

const Shift = ({ shift, removeShift }) => (
  <div className={classes.shift}>
    <div className={classes.label}>{shift.employee}</div>
    <button className={classes.delete} role="button" onClick={removeShift}>
      <span className={`material-icons ${classes.delete}`}>person_remove</span>
    </button>
  </div>
);

export default Shift;
