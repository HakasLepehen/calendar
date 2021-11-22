import React from 'react';
import classes from './Shift.module.css';

const Shift = ({ shift }) => (
  <div className={classes.shift}>
    <div className={classes.label}>{shift}</div>
    <span className={`material-icons ${classes.delete}`}>person_remove</span>
  </div>
);

export default Shift;
